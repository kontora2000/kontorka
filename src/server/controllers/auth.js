const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // if user is authenticated in the session, call the next() to call the next request handler 
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects
  let token = req.headers['x-access-token'] || req.headers.authorization; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not!  valid',
        }); 
      } else {
        req.decoded = decoded;
        next();
      }
      return null;
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Authorization token is not supplied',
    });
  }
};
