const JWT = require('jsonwebtoken');

const secret = '!p@a#w$a%n^1&1*0(@)g_m+a'


function createTokenForUser(user){
     const payload = {
      _id :user._id,
      email : user.email,
      password: user.password,
      profileImageUrl: user.profileImageUrl,
      role:user.role, 
     };

     const token = JWT.sign(payload, secret,);
     return token;
}


function ValidateToken(token){
   const payload = JWT.verify(token,secret);
   return payload;

}


module.exports = {
    createTokenForUser,
    ValidateToken
}