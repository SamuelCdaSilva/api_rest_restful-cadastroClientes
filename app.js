const express = require("express");

const app = express();

app.use(express.json());

/** 
 *  Anotações:
 *
 *  Verbos HTTP
 *  GET: Receber dados de um Resource.
 *  POST: Enviar dados ou informações para serem  processados por um Resource.
 *  PUT: Atualizar dados de um Resource.
 *  DELETE: Deletar um Resource.
 * */ 


const product = [];

/**
 *  Body -> Sempre que quiser enviar dados para minha aplicação
 *  Params -> /product/2238723907283
 *  Query -> /product/id=12312312312312value=312342134123124
 */



app.post("/products", (request, reponse) => {
    // Nome e Preço => Name and Price

    const body = request.body;

    console.log(body);
});

app.listen(4002, () => console.log("Servidor está rodando na porta 4002"));
