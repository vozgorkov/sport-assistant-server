const measuresModel = require('../../models/measures.model');

const getMeasures = (req, res) => {
  res.json(measuresModel.getAllMeasures());
};

const getMeasure = (req, res) => {
  const measure = measuresModel.getMeasure(req.params.id);

  if (measure) {
    res.json(measure);
  } else {
    res.status(404).json({
      error: 'Measure not found',
    });
  }
};

const postMeasure = (req, res) => {
  if (
    !req.body.personName
    || !req.body.chest
    || !req.body.waist
    || !req.body.hips
  ) {
    return res.status(400).json({
      error: 'Missing required data for measures',
    });
  }

  measuresModel.addNewMeasure(req.body);

  return res.json(measuresModel.getAllMeasures());
};

const removeMeasure = (req, res) => {
  const measure = measuresModel.getMeasure(req.params.id);

  if (measure) {
    measuresModel.removeMeasure(req.params.id);
    res.json(measuresModel.getAllMeasures());
  } else {
    res.status(404).json({
      error: 'Measure not found',
    });
  }
};

module.exports = {
  getMeasures,
  getMeasure,
  postMeasure,
  removeMeasure,
};
