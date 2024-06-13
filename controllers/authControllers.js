const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 13);
    const user = new User({
      username: username,
      password: hashedPassword,
    });
    await user.save();

    return res.status(200).json({
      message: "User registersd successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      return res.status(422).json({
        message: "Fill required fields",
      });
    }
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    let validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        message: "not valid password",
      });
    }

    const token = jwt.sign({ userId: user._id }, "SaharSecretKey", {
      expiresIn: "1h",
    });

    return res.status(200).json({
      token,
      userId: user._id,
      username: user.username,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error ",
    });
  }
};
