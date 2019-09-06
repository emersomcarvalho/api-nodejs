// Importando
const  express = require("express");
const cors = require('cors');  // pra rodar externamente
const mongoose = require("mongoose");
const requireDir= require("require-dir");
    // Iniciando o App
const app = express();
app.use(express.json()); // pra rodar  todas as req em Json
app.use(cors()); // pra outros dominios terem acesso a minha api publicamente
// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true });

// Caminho do arquivo
requireDir("./src/models/");

//const Product = mongoose.model('Product');  Nao utilizara por enquanto
// Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);
