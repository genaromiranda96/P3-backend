const express = require('express');
const { checkIfLoggedIn } = require('../middlewares');
const User = require('../models/User');

const Post = require('../models/Post');

const router = express.Router();


//Show all post created OK
router.get('/', checkIfLoggedIn, async (req, res) => {
  const allUser = await User.find({});
  const allPost = await Post.find({});
  res.json({ found: allPost, allUser })
});

//Show Post by ID OK
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
      try {
        const post = await Post.findById(id);
        res.json({ found: post });

  } catch(error) {
      next(error);
  }

    // Post.findById(id)
    // .populate('author')
    // .then((post) => {
    //   res.json({ found: post });
    // })
    // .catch(error => {next(error)});

})


module.exports = router;