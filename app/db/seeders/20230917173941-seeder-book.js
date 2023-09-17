'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          title: 'David Bach: Faktor Latte',
          author: 'David Bach',
          image: '/uploads/image1.png',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 6,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '"Selena" dan "Nebula"',
          author: 'TERE LIYE',
          image: '/uploads/image2.png',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 6,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Pelukis Bisu (The Silent Patient)',
          author: 'Alex Michaelides',
          image: '/uploads/image3.png',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 6,
          category: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Kecamuk Darah (Troubled Blood)',
          author: 'Robert Galbraith',
          image: '/uploads/image4.png',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 6,
          category: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Kitab Kawin (Edisi Cover Baru)',
          author: 'Laksmi Pamuntijak',
          image: '/uploads/image5.png',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 6,
          category: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Atomic Habits',
          author: 'James Clear',
          image: '/uploads/image6.png',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 6,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Lean Startup',
          author: 'Eric Ries',
          image: '/uploads/image7.png',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 6,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Cuckoo's Calling",
          author: 'Robert Galbraith',
          image: '/uploads/image8.png',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 6,
          category: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Psychology of Money',
          author: 'Morgan Housel',
          image: '/uploads/image9.png',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 6,
          category: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
