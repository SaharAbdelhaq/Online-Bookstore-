const jwt = require("jsonwebtoken");

exports.isAuth = (req, res) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "Access denied",
    });
  }
  try {
    let decoded = jwt.verify(token, SaharSecretKey);
    if (!decodedToken) {
      return res.status(403).json({
        message: "Authentication failed",
      });
    }
    req.userId = decoded.userId;
  } catch (e) {
    console.log(e);
  }
};
