const express = require('express');
const router = express.Router();

// Loading User model
const User = require('../../models/Auth');

// @Routes Get api/auth/test
// @Desc   Testing
// @Access Public
router.get('/test', (req, res) => res.json({ msg: 'testing auth' }));

// @Routes Post api/auth/register
// @Desc   registering Users
// @Access Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exist' });
    } else {
    }
  });
});

module.exports = router;
