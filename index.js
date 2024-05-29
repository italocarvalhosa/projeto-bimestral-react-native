'use strict';

async function consultACep(cep)
{
    let response = fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        .then(verifyResponse)
        .then(parseResponse)
        .catch(error => console.log(error));

    return response;
}

function verifyResponse(response){
    if(response.ok === false && response.status !== 200){
        throw new Error(
            "Não existe uma resposta válida"
        );
    }
    return response;
}

function parseResponse(response)
{
    return response.json();
}

function showCepToClient(cep){
    let result = Promise.resolve(consultACep(cep));
    return result;
}

console.log(showCepToClient('09970342'));