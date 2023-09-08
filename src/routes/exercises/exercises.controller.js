const exercisesModel = require('../../models/exercises.model');

const getExercises = (req, res) => res.json(exercisesModel.getAllExercises());

const getExercise = (req, res) => {
  const exercise = exercisesModel.getExercise(req.params.id);

  if (exercise) {
    res.json(exercise);
  } else {
    res.status(404).json({
      error: 'Exercise not found',
    });
  }
};

const postExercise = (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({
      error: 'Missing exercise title',
    });
  }
  exercisesModel.addNewExercise(req.body.title);

  return res.status(201).json(exercisesModel.getAllExercises());
};

const updateExercise = (req, res) => {
  exercisesModel.updateExercise(req.body);

  return res.status(201).json(exercisesModel.getAllExercises());
};

const removeExercise = (req, res) => {
  const exercise = exercisesModel.getExercise(req.params.id);

  if (exercise) {
    exercisesModel.removeExercise(req.params.id);
    res.json(exercisesModel.getAllExercises());
  } else {
    res.status(404).json({
      error: 'Measure not found',
    });
  }
};

module.exports = {
  getExercises,
  getExercise,
  postExercise,
  updateExercise,
  removeExercise,
};
