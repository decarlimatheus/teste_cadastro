const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("teste_cadastro", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("Conectamos com sucesso!");
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`);
}

module.exports = sequelize;
