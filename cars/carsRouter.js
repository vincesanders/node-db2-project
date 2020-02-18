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

module.exports = router;