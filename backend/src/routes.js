const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');


const route = express.Router();

route.get('/', (req, res) => {
    return res.send(`<h1>Parametro enviado: ${req.query.username} </h1>`);
});

route.post('/devs', DevController.store);
route.post('/devs/:devId/likes', LikeController.store);
route.post('/devs/:devId/dislikes', DislikeController.store);
route.get('/devs/', DevController.index);

module.exports = route;