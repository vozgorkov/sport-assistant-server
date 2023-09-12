const { getAllCategories, createCategory } = require('../../models/categories/categories.model');

const getCategories = async (req, res) => res.status(200).json(await getAllCategories());

const postCategory = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({
      error: 'Missing category title',
    });
  }

  await createCategory({ title: req.body.title });
  const updatedCategories = await getAllCategories();
  return res.status(201).json(updatedCategories);
};

module.exports = {
  getCategories,
  postCategory,
};
