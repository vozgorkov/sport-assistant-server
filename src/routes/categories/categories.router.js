const express = require('express');

const { getCategories, postCategory } = require('./categories.controller');

const categoriesRouter = express.Router();

categoriesRouter.get('/', getCategories);
categoriesRouter.post('/', postCategory);

module.exports = categoriesRouter;
