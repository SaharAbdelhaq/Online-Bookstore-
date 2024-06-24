const express = require("express");
const User = require("../models/User");
const { prevAdmin } = require("../Privileges/Privileges");

export const isAdmin = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const hasAdminPrivileges = user?.prevAdmin?.includes(prevAdmin);
    if (!hasAdminPrivileges) {
      throw new Error("You need to be an admin to perform this operation");
    }
  } catch (err) {
    console.log(err);
  }
};
