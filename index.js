const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//database
const conn = require("./database/database");

conn
    .authenticate()
    .then(() => {
        console.log("Conexao realizada com o BD")
    })
    .catch((msgErro) =>{
        console.log(msgErro);
    });


//usando express com EJS
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//Configuração BodyParser
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
   res.render("index");
});

app.get("/perguntar", (req,res)=>{
    res.render("perguntar");
});

app.post("/salvarpergunta",(req,res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    res.send("Formulário Recebido" + titulo +" " + descricao);
});

app.listen(8080,()=>{console.log("App rodando");});