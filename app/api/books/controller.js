const { Book, Category } = require('../../db/models');
const book = require('../../db/models/book');
const { Op } = require('sequelize');

module.exports = {
  getAllBooks: async (req, res, next) => {
    try {
      const { keyword = '', category = '' } = req.query;

      let condition = {
        user: req.user.id,
      };

      if (keyword !== '') {
        condition = { ...condition, title: { [Op.like]: `%${keyword}%` } };
      }

      if (category !== '') {
        condition = { ...condition, category: category };
      }

      console.log(req.user);

      const books = await Book.findAll({
        where: condition,
        include: {
          model: Category,
          attributes: ['id', 'name'],
        },
      });

      res.status(200).json({ messege: 'Success get all books', data: books });
    } catch (err) {
      next(err);
    }
  },

  createBooks: async (req, res, next) => {
    try {
      let user = req.user.id;
      const { title, price, category, author, published, stock, image } =
        req.body;

      const checkCategory = await Category.findOne({
        where: {
          id: category,
          user: user,
        },
      });

      if (!checkCategory) {
        return res.status(404).json({ messege: 'id category not found' });
      }

      const books = await Book.create({
        title,
        price,
        category,
        author,
        published,
        stock,
        image,
        user: user,
      });

      res.status(201).json({ messege: 'Success create books', data: books });
    } catch (err) {
      next(err);
    }
  },

  updateBooks: async (req, res, next) => {
    try {
      let user = req.user.id;
      const { id } = req.params;
      const { title, price, category, author, published, stock, image } =
        req.body;

      const checkCategory = await Category.findOne({
        where: {
          id: category,
          user: user,
        },
      });

      if (!checkCategory) {
        return res.status(404).json({ messege: 'id category not found' });
      }

      const checkBooks = await Book.findOne({
        where: { id: id },
      });

      if (!checkBooks) {
        return res.status(404).json({ message: 'id book not found' });
      }

      const books = await checkBooks.update({
        title,
        price,
        category,
        author,
        published,
        stock,
        image,
        user: user,
      });

      res.status(200).json({ messege: 'Success update books', data: books });
    } catch (err) {
      next(err);
    }
  },

  deleteBooks: async (req, res, next) => {
    try {
      const books = await Book.findOne({ where: { id: req.params.id } });

      if (!books) {
        return res.status(404).json({ message: 'id book not found' });
      }

      books.destroy();

      res.status(201).json({
        message: 'Success delete books',
        data: books,
      });
    } catch (err) {
      next(err);
    }
  },
};
