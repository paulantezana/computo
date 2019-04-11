const fetch = require('node-fetch');
const Bluebird = require('bluebird');
const { service } = require('./config');

fetch.Promise = Bluebird;

function setHeaders(options) {
    if (options.method === 'POST' || options.method === 'PUT' || options.method === 'DELETE') {
        options.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            ...options.headers,
        };
        options.body = JSON.stringify(options.body);
    }
    return options;
}

module.exports = (path, options) => {
    // Estableciendo los headers de las peticiones
    // POST | PUT | DELETE
    const newOptions = setHeaders(options);

    const url = service.api_path + path; // Formando la URL de la peticion
    // Realizando la peticion con los parametros pertinentes
    console.log(url,newOptions,'SEND------');
    return fetch(url,newOptions)
        .then(response => {
            return response.json(); // Return response
        })
}
