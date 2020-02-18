const express = require('express');

const carsRouter = require('./cars/carsRouter');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the car dealer API.' });
});

module.exports = server;