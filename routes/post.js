const express = require('express');
const { checkIfLoggedIn } = require('../middlewares');
const Post = require('../models/Post');
const router = express.Router();

//Create and save a post for do sport in group OK
router.post('/', checkIfLoggedIn, async (req, res, next) => {
  const { sport, location, hour, day, year } = req.body;
  console.log('req.session.currentUser', req.session.currentUser)
	try {
		const post = await Post.create({ 
      author: req.session.currentUser._id,
      sport,
      location, 
      hour,
      day,
      year,
    }
  )
  console.log('post', post)
		return res.json({create: post});
	} catch (error) {
		return next(error);
	}
});

//Show all post created OK
router.get('/', checkIfLoggedIn, async (req, res) => {
  const allPost = await Post.find();
  res.json({ found: allPost})
});

//Show Post by ID OK
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {

        const post = await Post.findById(id);
        res.json({ found: post});

  } catch(error) {
      next(error);
  }
})

//Find and update by ID
router.put('/:id/edit', checkIfLoggedIn, async (req, res) => {
  const { sport, location, hour, day, year } = req.body;
  const { id } = req.params;

  const postUpdate = await Post.findByIdAndUpdate(id, 
    {sport, location, hour, day, year}, { new: true })
    res.json({ updated: postUpdate});
});


//DELETED POST OF SPORT MEETING
router.delete('/:id', checkIfLoggedIn, async (req, res, next) => {
  const { id } = req.params;
  try {
      const postDeleted = await Post.findByIdAndDelete(id);
      res.json({ deleted: postDeleted})
  } catch (error) {
    next(error);
  }
});

module.exports = router;