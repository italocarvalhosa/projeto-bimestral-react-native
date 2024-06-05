// Criar promise
/*
const myPromise = new Promise((resolve, reject) => {
    const nome = "Jefferson";

    if(nome === 'Jefferson'){
        resolve({
            data: {
                response: 'Usuário encontrado'
            }
        });
    } else {
        reject({
            data: {
                response: {
                    error: 'Usuário não encontrado'
                }
            }
        });
    }
});

myPromise.then((data) => {
    console.log(data.data.response);
}).catch((e) => {
    console.log(e.data.response.error);
});
*/
/*
console.log("\nPromise()\n");
// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
    const nome = "Jef";

    if(nome === 'Jef'){
        resolve({
            data: {
                response: 'Usuário encontrado'
            }
        });
    } else {
        reject({
            data: {
                response: 'Usuário não encontrado'   
            }
        });
    }
});

myPromise2.then((data) => {
   return data.data.response.toUpperCase();
}).then((stringModified) => {
    console.log(stringModified);
}).catch((error) => {
    console.log(error);
});

console.log("\nPromise.all()\n");
// Resolvendo várias promises com Promise.all()
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("\nPromise.all()");
        console.log("waiting...");
        console.log("P1 OK!");
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    console.log("P2 Ok!");
});

const p3 = new Promise((resolve, reject) => {
    console.log("P3 Ok!");    
});

const promises = Promise.all([p1, p2, p3])
    .then((data) => {
        console.log(data);
    });

console.log("\nPromise.race()\n");
// Resolvendo com o Promise.race()
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("\nPromise.race()");
        console.log("waiting...");
        console.log("P4 OK!");
    }, 2000);
});

const p5 = new Promise((resolve, reject) => {
    console.log("P2 Ok!");
});

const p6 = new Promise((resolve, reject) => {
    console.log("P3 Ok!");    
});

const promises2 = Promise.race([p4, p5, p6]);

console.log("\n\n\n\n\n\n\n\n\n");*/

const userName = "teteu-hue";

const url = `https://api.github.com/users/${userName}`;

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
};

const verifyResponse = (response) => {
    if(response.ok === false && response.status !== 200)
    {
        throw new Error(error => console.log(error));
    }
    return response.json();
};

const parseResponse = (data) => {
    console.log(data);
}

fetch(url, options)
    .then(verifyResponse)
    .then(parseResponse)
    .catch(error => console.log(error));