const User = require("../models/User");

exports.getUserInformation = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      console.log(user);
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    return res.status(200).json({
      user: user,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "Inetrnal Server Error",
    });
  }
};
