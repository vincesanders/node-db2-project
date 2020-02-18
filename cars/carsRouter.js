const express = require('express');
const knex = require('knex');
const configOptions = require('../knexfile').development;

const db = knex(configOptions);

const router = express.Router();

router.get('/', (req, res) => {
    db('cars').then(cars => {
        res.status(200).json(cars);
    }).catch(err => {
        res.status(500).json({ message: 'Unable to retrieve cars data.' });
    })
});

router.get('/:id', (req, res) => {
    getByID(req.params.id).then(cars => {
        res.status(201).json(cars[0]);
    }).catch(err => {
        res.status(500).json({ error: 'Unable to retrieve the car you requested.' });
    });
});

function getByID(id) {
    return db('cars').where({ id: id });
}


module.exports = router;