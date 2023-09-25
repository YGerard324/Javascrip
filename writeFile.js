const fs = require('fs');

const erro = "Deu erro ao cadastrar";

fs.writeFile("./novoaquivo.txt", erro, ()=> {
    console.log("Arquivo escrito!")
});