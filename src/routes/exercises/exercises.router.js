const express = require('express');
const {
  getExercises,
  postExercise,
  getExercise,
  updateExercise,
  removeExercise,
} = require('./exercises.controller');

const exercisesRouter = express.Router();

exercisesRouter.get('/', getExercises);
exercisesRouter.post('/', postExercise);
exercisesRouter.get('/:id', getExercise);
exercisesRouter.put('/', updateExercise);
exercisesRouter.delete('/:id', removeExercise);

module.exports = exercisesRouter;
