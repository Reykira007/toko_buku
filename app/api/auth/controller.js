const { User } = require('../../db/models');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  signin: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const checkUser = await User.findOne({ where: { email: email } });

      if (checkUser) {
        const checkPassword = bycrypt.compareSync(password, checkUser.password);

        if (checkPassword) {
          const token = jwt.sign(
            {
              user: {
                id: checkUser.id,
                name: checkUser.name,
                email: checkUser.email,
              },
            },
            'secret'
          );
          res.status(200).json({ messege: 'Success Signin', data: token });
        } else {
          res.status(403).json({ messege: 'Invalid password' });
        }
      } else {
        res.status(403).json({ messege: 'Invalid Email' });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

  signup: async (req, res, next) => {
    try {
      const { name, email, password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
        res
          .status(403)
          .json({ messege: "Password and confirm password don't match" });
      }
      const checkEmail = await User.findOne({ where: { email: email } });
      if (checkEmail) {
        return res.status(403).json({ messege: 'Email registered' });
      }

      const user = await User.create({
        name,
        email,
        password: bycrypt.hashSync(password, 10),
        role: 'admin',
      });
      // console.log(user);
      delete user.dataValues.password;
      res.status(201).json({ messege: 'Success Signup', data: user });
    } catch (err) {
      next(err);
    }
  },
};
