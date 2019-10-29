/*
* Cloth Simulation using a relaxed constraints solver
*/

import WEBGL from  './WebGL.js.js';

const DAMPING = 0.06;
const DRAG = 1 - DAMPING;
const MASS = 0.1;
const restDistance = 25;
const xSegs = 88;
const ySegs = 26;
const clothFunction = plane( restDistance * xSegs, restDistance * ySegs );
const cloth = new Cloth( xSegs, ySegs );
const GRAVITY = 981 * 1.7;
const gravity = new THREE.Vector3( 0, -0.05*GRAVITY, 0 ).multiplyScalar( MASS );
const TIMESTEP = 18 / 1000;
const TIMESTEP_SQ = TIMESTEP * TIMESTEP;
var pins = [];
const wind = true;
let windStrength = 19;
let windForce = new THREE.Vector3( 0.5, 0.0, 0.1 );
windForce.set( 0.5, 0.5, 0.2);
let tmpForce = new THREE.Vector3();
let lastTime;

function plane( width, height ) {
	return function ( u, v, target ) {
		var x = ( u - 0.5 ) * width;
		var y = ( v + 0.5 ) * height;
		var z = 0;
		target.set( x, y, z );
	};
}
function Particle( x, y, z, mass ) {
	
	this.position = new THREE.Vector3();
	this.previous = new THREE.Vector3();
	this.original = new THREE.Vector3();
	this.a = new THREE.Vector3( 0, 0, 0 ); // acceleration
	this.mass = mass;
	this.invMass = 1 / mass;
	this.tmp = new THREE.Vector3();
	this.tmp2 = new THREE.Vector3();
	clothFunction( x, y, this.position ); // position
	clothFunction( x, y, this.previous ); // previous
	clothFunction( x, y, this.original );
	
}
Particle.prototype.addForce = function ( force ) {
	
	this.a.add(
		this.tmp2.copy( force ).multiplyScalar( this.invMass )
		);
		
	};
	
	Particle.prototype.integrate = function ( timesq ) {
		
		var newPos = this.tmp.subVectors( this.position, this.previous );
		newPos.multiplyScalar( DRAG ).add( this.position );
		newPos.add( this.a.multiplyScalar( timesq ) );
		
		this.tmp = this.previous;
		this.previous = this.position;
		this.position = newPos;
		
		this.a.set( 0, 0, 0 );
		
	};
	var diff = new THREE.Vector3();
	function satisfyConstraints( p1, p2, distance ) {
		diff.subVectors( p2.position, p1.position );
		var currentDist = diff.length();
		if ( currentDist === 0 ) return; // prevents division by 0
		var correction = diff.multiplyScalar( 1 - distance / currentDist );
		var correctionHalf = correction.multiplyScalar( 0.5 );
		p1.position.add( correctionHalf );
		p2.position.sub( correctionHalf );
	}
	function Cloth( w, h ) {
		
		w = xSegs;
		h = ySegs;
		this.w = w;
		this.h = h;
		var particles = [];
		var constraints = [];
		var u, v;
		// Create particles
		for ( v = 0; v <= h; v ++ ) {
			for ( u = 0; u <= w; u ++ ) {
				particles.push(
					new Particle( u / w, v / h, 0, MASS )
					);
				}
			}
			for ( v = 0; v < h; v ++ ) {
				for ( u = 0; u < w; u ++ ) {
					constraints.push( [
						particles[ index( u, v ) ],
						particles[ index( u, v + 1 ) ],
						restDistance
					] );
					constraints.push( [
						particles[ index( u, v ) ],
						particles[ index( u + 1, v ) ],
						restDistance
					] );
				}
			}
			for ( u = w, v = 0; v < h; v ++ ) {
				constraints.push( [
					particles[ index( u, v ) ],
					particles[ index( u, v + 1 ) ],
					restDistance
				] );
			}
			for ( v = h, u = 0; u < w; u ++ ) {
				constraints.push( [
					particles[ index( u, v ) ],
					particles[ index( u + 1, v ) ],
					restDistance
				] );
			}
			var diagonalDist = Math.sqrt(restDistance * restDistance * 2);
			for (v=0;v<h;v++) {
				for (u=0;u<w;u++) {
					constraints.push([
						particles[index(u, v)],
						particles[index(u+1, v+1)],
						diagonalDist
					]);
					constraints.push([
						particles[index(u+1, v)],
						particles[index(u, v+1)],
						diagonalDist
					]);
				}
			}
			this.particles = particles;
			this.constraints = constraints;
			function index( u, v ) {
				return u + v * ( w + 1 );
			}
			this.index = index;
		}
		function simulate( time ) {
			if ( ! lastTime ) {
				lastTime = time;
				return;
			}
			var i, il, particles, particle, pt, constraints, constraint;
			// Aerodynamics forces
			if ( wind ) {
				var indx;
				var normal = new THREE.Vector3();
				var indices = clothGeometry.index;
				var normals = clothGeometry.attributes.normal;
				particles = cloth.particles;
				for (let i = 0, il = indices.count; i < il; i += 3 ) {
					for (let j = 0; j < 3; j ++ ) {
						indx = indices.getX( i + j );
						normal.fromBufferAttribute( normals, indx )
						tmpForce.copy( normal ).normalize().multiplyScalar( normal.dot( windForce ) );
						particles[ indx ].addForce( tmpForce );
					}
				}
			}
			for ( particles = cloth.particles, i = 0, il = particles.length; i < il; i ++ ) {
				particle = particles[ i ];
				particle.addForce( gravity );
				particle.integrate( TIMESTEP_SQ );
			}
			// Start Constraints
			constraints = cloth.constraints;
			il = constraints.length;
			for (let i = 0; i < il; i ++ ) {
				constraint = constraints[ i ];
				satisfyConstraints( constraint[ 0 ], constraint[ 1 ], constraint[ 2 ] );
			}
			for (let i = 0, il = pins.length; i < il; i ++ ) {
				var xy = pins[ i ];
				var p = particles[ xy ];
				p.position.copy( p.original );
				p.previous.copy( p.original );
			}
		}

		// var stats= new Stats();
		// document.body.appendChild(stats.dom);
		pins = [0];
		for (let i = 1;i<ySegs+1;i++)
		{
			pins[i]=pins[i-1]+cloth.w+1;
		}
		if ( WEBGL.isWebGLAvailable() === false ) {
			document.body.appendChild( WEBGL.getWebGLErrorMessage() );
		}
		let container;
		let camera, scene, renderer;
		let clothGeometry;
		let sphere;
		let object;
		let canvas;
		let width=window.innerWidth;
		let height=0;
	
		function init() {
			// scene
			canvas =  document.getElementById('canvas');
			height=canvas.offsetHeight;
			scene = new THREE.Scene();
			
			// camera
			camera = new THREE.PerspectiveCamera( 45, width/ height, 1, 2000 );
			camera.up = new THREE.Vector3(0,0,1);
			// lights
			scene.add( new THREE.AmbientLight( 0xffffff ) );
			var light = new THREE.DirectionalLight( 0xcccccc, 2.0 );
			light.position.set( 50, 200, 0 );
			light.position.multiplyScalar( 1.3 );
			light.castShadow = false;
			light.shadow.mapSize.width = width;
			light.shadow.mapSize.height = height;
			var d = 500;
			light.shadow.camera.left = - d;
			light.shadow.camera.right = d;
			light.shadow.camera.top = d;
			light.shadow.camera.bottom = - d;
			light.shadow.camera.far = 750;
			scene.add( light );
			// cloth material
			var loader = new THREE.TextureLoader();
			var clothTexture = loader.load( '../assets/_img/kontora-flag-en.png' );
			var spec= loader.load( '../assets/_img/spec.jpg' );
			var clothMaterial = new THREE.MeshPhongMaterial( {
				map: clothTexture,
				specular:0xffffff,
				shininess:-15,
				//specularMap:spec
			} );
			// cloth geometry
			clothGeometry = new THREE.ParametricBufferGeometry( clothFunction, cloth.w, cloth.h);
			// cloth mesh
			object = new THREE.Mesh( clothGeometry, clothMaterial );
			console.log(height);
			var posz= (1960/width)*30;
			var ycoef = (600/height)*1.051;
			console.log(width);
			console.log(height);
			console.log(posz);
			object.position.set( 10, -height*ycoef, -posz );
			camera.position.set( 0, 0, 790 );
			object.castShadow = false;
			scene.add( object );
			// renderer
			renderer = new THREE.WebGLRenderer( { antialias: true, canvas:canvas,alpha:true } );
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( width, height );
			renderer.setClearColor( 0xffffff, 0 );
			
		}
		//
		function onWindowResize() {
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize( width, height );
		}
		//
		function animate() {
			requestAnimationFrame( animate );
			var time = Date.now();
			windForce.set( 0.5, 0.4, Math.sin(time)/10);
			windStrength=18.5+Math.random()*2;
			windForce.normalize();
			windForce.multiplyScalar( windStrength );
			simulate( time );
			var p = cloth.particles;
			for ( var i = 0, il = p.length; i < il; i ++ ) {
				var v = p[ i ].position;
				clothGeometry.attributes.position.setXYZ( i, v.x, v.y, v.z );
			}
			clothGeometry.attributes.position.needsUpdate = true;
			clothGeometry.computeVertexNormals();
			renderer.render( scene, camera );
			//stats.update();
		} 
		
		
export {animate, onWindowResize, init}
		