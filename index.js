const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
   res.render("index");
});

app.get("/perguntar", (req,res)=>{
    res.render("perguntar");
});

app.listen(8080,()=>{console.log("App rodando");});