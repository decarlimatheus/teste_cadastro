const { DataTypes } = require("sequelize");

const db = require("../db/conn");

// User

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    require: true,
  },
  email: {
    type: DataTypes.STRING,
    require: true,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    require: true,
  },
  company: {
    type: DataTypes.STRING,
    require: true,
  },
});

module.exports = User;
