const router = require('express').Router();
const { User, AnimePList, SpecificEpisode, TheAnime } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    res.render('homepage', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

// make sure to add the auth to the things for the my list and dashboard
router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard', {
// make sure your not pulling the object animePList but the info for it
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:anime/:id', async (req, res) => {
  try {
    res.render('animeEpisodes', {
// make sure your not pulling the object animePList but the info for it
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:anime/episodes/:id', async (req, res) => {
  try {
    res.render('episode', {
// make sure your not pulling the object animePList but the info for it
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get(`/signup`, async (req, res) => {
  try {
    res.render(`signup`,{

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
