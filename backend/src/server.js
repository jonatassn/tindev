const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

mongoose.connect(
    'mongodb+srv://jonatassn:jonatassn@cluster0-hyag6.mongodb.net/tindev?retryWrites=true&w=majority',
     {useNewUrlParser:true});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8001);