const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const exerciseRouter = require('./routes/exercises/exercises.router');
const measuresRouter = require('./routes/measures/measures.router');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);
app.use(morgan('combined'));
app.use(express.json());

// app.use('/categories');
app.use('/exercises', exerciseRouter);
app.use('/measures', measuresRouter);

module.exports = app;
