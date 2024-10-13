
const {ValidateToken} = require('../services/authentication.js');

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenvalue = req.cookies[cookieName];
    if (!tokenvalue) {
      return next();
    }

    try {
      const userPayLoad = ValidateToken(tokenvalue);
      req.user = userPayLoad;
    } catch (error) {}

    return  next();
  };
}


module.exports = {
    checkForAuthenticationCookie
}