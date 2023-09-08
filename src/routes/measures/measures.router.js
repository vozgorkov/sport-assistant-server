const express = require('express');
const measuresController = require('./measures.controller');

const measuresRouter = express.Router();

measuresRouter.get('/', measuresController.getMeasures);
measuresRouter.post('/', measuresController.postMeasure);
measuresRouter.get('/:id', measuresController.getMeasure);
measuresRouter.delete('/:id', measuresController.removeMeasure);

module.exports = measuresRouter;
