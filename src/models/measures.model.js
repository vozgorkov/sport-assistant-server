const measures = new Map();

measures.set(1, {
  id: 1,
  personName: 'Юля',
  chest: 90,
  waist: 60,
  hips: 90,
});

const getAllMeasures = () => Array.from(measures.values());

const getMeasure = (measureId) => measures.get(+measureId);

const addNewMeasure = ({
  personName,
  chest,
  waist,
  hips,
}) => {
  const newMeasure = {
    id: 2,
    personName,
    chest,
    waist,
    hips,
  };

  measures.set(2, newMeasure);
};

const removeMeasure = (measureId) => {
  measures.delete(+measureId);
};

module.exports = {
  getAllMeasures,
  getMeasure,
  addNewMeasure,
  removeMeasure,
};
