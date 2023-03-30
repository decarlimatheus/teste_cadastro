const User = require("../models/User");

module.exports = class UserController {
  static async createUser(req, res) {
    return res.render("users/home");
  }

  static async createPost(req, res) {
    const { name, email, phone, company } = req.body;

    const checkIfUserExists = await User.findOne({ where: { email: email } });

    if (checkIfUserExists) {
      req.flash("message", "Usuário já existente");
      return res.render("users/home");
    }

    try {
      await User.create({ name, email, phone, company });

      req.flash("message", "Usuário cadastrado!");
      return res.render("users/home");
    } catch (err) {
      return console.log(err);
    }
  }

  static async showAll(req, res) {
    const users = await User.findAll({ raw: true });

    return res.render("users/table", { users });
  }

  static async edit(req, res) {
    const { email } = req.params;

    const user = await User.findOne({ where: { email }, raw: true });

    if (!user) {
      req.flash("message", "Usuário não encontrado!");
      return res.render("users/home");
    }

    return res.render("users/edit", {
      user,
    });
  }

  static async update(req, res) {
    const { name, email, phone, company } = req.body;

    try {
      await User.update({ name, company, phone }, { where: { email } });

      req.flash("message", "Usuário alterado!");
      return res.render("users/home");
    } catch (err) {
      return console.log(err);
    }
  }

  static async delete(req, res) {
    const { email } = req.body;

    try {
      await User.destroy({ where: { email } });
      req.flash("message", "Usuário deletado");
      return res.render("users/home");
    } catch (err) {
      console.log(err);
    }
  }
};
