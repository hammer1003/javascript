const { verify } = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

module.exports = context => {
  let user = "";
  const auth = context.req.headers.authorization;
  if (auth) {
    const token = auth.split("Bearer ")[1];
    if (token) {
      try {
        return verify(token, SECRET_KEY);
      } catch (err) {
        return user;
      }
    }
    return user;
  }
  return user;
};
