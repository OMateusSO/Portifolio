const mongoose = require("mongoose");

const db= process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = () => {
  mongoose.connect(`mongodb+srv://${db}:${dbPassword}@cluster0.lc3zz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

  const index = mongoose.connection;

  index.on("error", () => {
    console.error("Erro ao conectar com servidor")
  })

  index.on("open", () => {
    console.log("Conectado ao MongoDB")
  })

}

connect();

module.exports = mongoose;