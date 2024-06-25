const jwt = require("jsonwebtoken");

exports.isAuth = (req, res, next) => {
  try {
    if (!req.get("Authorization")) {
      return res.status(401).json({
        message: "not Authenticated",
      });
    }
    const token = req.get("Authorization")?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "not Authenticated",
      });
    }
    let decoded = jwt.verify(token, "SaharSecretKey");
    if (!decoded) {
      return res.status(403).json({
        message: "Authentication failed",
      });
    }
    req.userId = decoded.userId;
    next();
  } catch (e) {
    console.log(e);
  }
};
