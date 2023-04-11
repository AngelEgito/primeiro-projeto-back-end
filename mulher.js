const express = require("express");
const router = express.Router()


const app = express();
const porta = 3333;

function mostraMulher(request,response) {
    response.json({
        nome: 'Angélica Egito',
        imagem: 'https://avatars.githubusercontent.com/u/82975477?v=4',
        minibio:'Desenvolvedora e Mãe'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta);