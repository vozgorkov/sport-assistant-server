const exercises = new Map();

exercises.set(1, {
  id: 1,
  title: 'Жим лёжа',
  sets: [
    {
      rep: 10,
      weight: 20,
    },
  ],
});

exercises.set(2, {
  id: 2,
  title: 'Приседания',
});

const getAllExercises = () => Array.from(exercises.values());

const getExercise = (exerciseId) => exercises.get(+exerciseId);

const addNewExercise = (title) => {
  const newExercise = {
    title,
    id: 3,
  };

  exercises.set(3, newExercise);
};

const updateExercise = (updatedExercise) => {
  exercises.set(updatedExercise.id, updatedExercise);
};

const removeExercise = (exerciseId) => {
  exercises.delete(+exerciseId);
};

module.exports = {
  getAllExercises,
  addNewExercise,
  getExercise,
  updateExercise,
  removeExercise,
};
