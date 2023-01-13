const express = require('express');
const moviesData = require('../data/movies.json')

const app = express();

app.get('/', (req, res) => res.status(200).json({ message: '3002 ok' }));

module.exports = app;