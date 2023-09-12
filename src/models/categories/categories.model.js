const categories = require('./categories.mongo');

const getAllCategories = async () => {
  try {
    return await categories.find({});
  } catch (error) {
    console.error('Failed to get categories');
  }
};

const createCategory = async (data) => {
  try {
    await categories.create({
      title: data.title,
    });
  } catch (error) {
    console.error('Failed to create category');
  }
};

module.exports = {
  getAllCategories,
  createCategory,
};
