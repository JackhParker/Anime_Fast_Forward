const router = require('express').Router();
const { SpecificEpisode } = require('../../models');

router.post('/info', async (req, res) => {
  try {
      console.log(req.body)
    const episode = await SpecificEpisode.create({...req.body } );

   res.status(200).json(episode);
 
  } catch (err) {
    res.status(400).json(err);
  }
})


module.exports = router;