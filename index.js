const mongoose = require("mongoose");
const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
app.use(express.json());
app.use(authRoutes);
app.use(userRoutes);
mongoose
  .connect(
    "mongodb+srv://AbdallahDereia:JLiq00ZXmUOuNl4v@cluster0.7ok67.mongodb.net/BookStore?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("connected");
    app.listen(5000);
  })
  .catch((error) => {
    console.log(error);
  });
