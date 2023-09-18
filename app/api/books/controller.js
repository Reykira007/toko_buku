const { Book, Category } = require('../../db/models');
const book = require('../../db/models/book');
const { Op } = require('sequelize');

module.exports = {
  getAllBooks: async (req, res, next) => {
    try {
      const { keyword = '' } = req.query;
      console.log(keyword);

      let condition = {
        user: req.user.id,
      };

      if (keyword !== '') {
        condition = { ...condition, title: { [Op.like]: `%${keyword}%` } };
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

  // createBooks: async (req, res, next) => {
  //   try {
  //     const { name } = req.body;
  //     const book = await Book.create({
  //       name: name,
  //       user: req.user.id,
  //     });

  //     res.status(201).json({ messege: 'Success create books', data: book });
  //   } catch (err) {
  //     next(err);
  //   }
  // },

  // updateBooks: async (req, res, next) => {
  //   try {
  //     const { id } = req.params;
  //     const { name } = req.body;
  //     const checkBook = await Book.findOne({
  //       where: { id: id, user: req.user.id },
  //     });

  //     const book = await checkBook.update({ name: name });
  //     res.status(201).json({ messege: 'Success update books', data: book });
  //   } catch (err) {
  //     next(err);
  //   }
  // },

  // deleteBooks: (req, res, next) => {
  //   Book.findOne({ where: { id: req.params.id, user: req.user.id } })
  //     .then(book => {
  //       if (book) {
  //         book.destroy();
  //         res.status(200).json({ messege: 'Success delete books', data: book });
  //       }
  //     })
  //     .catch(err => next(err));
  // },
};
