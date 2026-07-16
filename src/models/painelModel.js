var database = require("../database/config");


function listar() {
    
    var instrucaoSql = `
        SELECT 
            * 
        FROM livro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(quantidadeEstoque) {
    
    var instrucaoSql = `
        INSERT INTO livro (quantidadeEstoque) VALUES ('${quantidadeEstoque}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar,
    cadastrar
}