'use strict';
// headers -> content-type -> o tipo de dado que está sendo enviado -> application/json
// accept -> o que recebemos de resposta -> application/json
// authentication -> autenticação -> jwp, OAuth
// dá para fazer um token dinâmico

const CEPAPI = {
    verifyResponse: (response) => {
        if(response.ok === false && response.status !== 200)
        {
            throw new Error(
                error => console.log(error)
            );
        }
        return response;
    },

    parseResponse: (data) => {
        return data.json();
    },

    consultACep: async (cep) => {
        let response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
            .then(CEPAPI.verifyResponse)
            .then(CEPAPI.parseResponse)
            .catch(error => console.log(error));
        return response;
    },

    showCepToClient: (cep) => {
        CEPAPI.consultACep(cep).then((data) => {
            for(let prop in data)
            {
                console.log(prop + ": " + data[prop]);
            }
        })
    }
};

CEPAPI.showCepToClient('09970342')

const BRASILAPI = {
    consultACep: async (cep) => {
        let response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
            .then(this.verifyResponse)
            .then()
    },
    verifyResponse: (response) => {
        if(response.ok === false && response.status !== 200)
        {
            throw new Error(error => console.log(error));
        }
        return response;
    },
    parseResponse: (data) => {
        return data.json();
    }
};
