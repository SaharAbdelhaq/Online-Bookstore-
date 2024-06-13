const jwt = require("jsonwebtoken");

exports.isAuth = (req, res) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      message: "Access denied",
    });
  }
  try {
    const decoded = jwt.verify(token, SaharSecretKey);
    req.userId = decoded.userId;
  } catch (e) {
    console.log(e);
  }
};
