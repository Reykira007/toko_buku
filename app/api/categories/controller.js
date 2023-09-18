const { Category } = require('../../db/models');

module.exports = {
  getAllCategories: async (req, res, next) => {
    try {
      console.log(req.user);
      const categories = await Category.findAll({
        where: { user: req.user.id },
        attributes: ['id', 'name'],
      });

      res
        .status(200)
        .json({ messege: 'Success get all categories', data: categories });
    } catch (err) {
      next(err);
    }
  },

  creaateCategories: async (req, res, next) => {
    try {
      const { name } = req.body;
      const categories = await Category.create({
        name: name,
        user: req.user.id,
      });

      res
        .status(201)
        .json({ messege: 'Success create categories', data: categories });
    } catch (err) {
      next(err);
    }
  },
};
