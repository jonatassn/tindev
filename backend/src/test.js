const express = require('express');

const server = express();

server.get('/', () => {
    return "OLA MUNDO";
});

server.listen(9001);