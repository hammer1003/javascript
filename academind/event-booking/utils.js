const { verify } = require("jsonwebtoken");
const { SECRET_KEY } = require("./config");
exports.dateToString = date => new Date(date).toISOString();

exports.isAuth = (req, res, next) => {
  console.log("req", req);
  // const authHeader = req.body.variables.Authorization;
  const authHeader = req.get("Authorization");

  console.log("authHeader", authHeader);

  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(" ")[1];
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }
  let decodedToken;
  try {
    decodedToken = verify(token, SECRET_KEY);
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.userId = decodedToken.userId;
  next();
};
