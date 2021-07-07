<template>
  <div>
    <header>
      <article data-background="#000000">
          <flag></flag>
        <div class="we-do">
          We design identities&thinsp;/&thinsp;websites&thinsp;/&thinsp;apps&thinsp;/&thinsp;ad
           &nbsp;content for&nbsp;social networks🔥
        </div>
        <div class="about-kontora">
          Independent design bureau <br>based in&nbsp;Novorossiysk.
          <div class="about-kontora-links">
            © 2018 
            <a class="about-kontora-link" id="vacancies" href="/vacancies"
             style="display: none;">
              Vacancies
            </a>
            <a class="about-kontora-link" id="partnership" href="/partnership"
             style="display: none;">
              Partnership
            </a>
          </div>
        </div>
      </article>
      <marquee side="top">
        <div class="multiply multiply-top" >
          <a class="link-hashtag filter marquee-link">3D</a>
          <a class="link-hashtag filter marquee-link">Web</a>
          <a class="link-hashtag filter marquee-link">Graphic</a>
          <a class="link-hashtag filter marquee-link">SMM</a>
        </div>
      </marquee>
      <marquee side="right">
        <div class="multiply multiply-right">
          <a class="link-instagram marquee-link" href="https://instagram.com/prostokontora"><span>instagram</span></a>
        </div>
      </marquee>
      <marquee side="bottom">
        <div class="multiply multiply-bottom">
          <a class="link-phone marquee-link" href="tel:+791654657990">
            <span>+7&thinsp;965&thinsp;465-79-90</span>
          </a>
          <a class="link-email marquee-link" href="mailto:mail@kontora.gq">
            <span>mail@kontora.gq</span>
          </a>
        </div>
      </marquee>
      <marquee side="left">
        <div class="multiply multiply-left"> 
          <a class="link-hashtag filter marquee-link">3D</a>
          <a class="link-hashtag filter marquee-link">Web</a>
          <a class="link-hashtag filter marquee-link">Graphic</a>
          <a class="link-hashtag filter marquee-link">SMM</a>
        </div>
      </marquee>
    </header>
    <main>
      <projects />
      <drag-form />
    </main>
     <!-- <footer>
  
          <a href="/requisites"><span>Реквизиты</span></a>
          <a href="/partnership"><span>Сотрудничество</span></a>
          <a href="/vacancies"><span>Вакансии</span></a>
          <span class="©">
              Контора
              <span class="©-©">©</span>
              <span class="©-year">2019</span>
          </span>
      </footer>-->
  </div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import projects from './projects';
import DragForm from './DragForm/index.vue';
import marquee from './marquee.vue'; // marques animated by greensock
import flag from './flag.vue';
// template wrapper for three.js flag renderer

export default {
  name: 'root',
  components: {
    DragForm,
    projects,
    marquee,
    flag,
  },
};
</script>
<style lang="scss">
html,
body {
  font-family: "Open Sans", sans-serif;
  position: relative;
  margin: 0;
  padding: 0;
  height: 100%;
  color: #333;
  letter-spacing: 1px;
  background: #f5f5f5;
  font-weight: 300;
}

a {
  text-decoration: none;
  color: #333;
}
main {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
}
</style>
