const express = require('express');

const showsService = require('../../services/showsService');
const ResponseHelper = require('../../services/responseHelper');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const shows = await showsService.getShows(req.query);
    res.json(ResponseHelper.createAPIResponse(shows));
  } catch (error) {
    res.status(500).json(ResponseHelper.createAPIError(error));
  }
});

router.get('/likes', async (req, res) => {
  try {
    const likes = await showsService.getLikes();
    res.json(ResponseHelper.createAPIResponse(likes));
  } catch (error) {
    res.status(500).json(ResponseHelper.createAPIError(error));
  }
});

router.post('/', async (req, res) => {
  const { id } = req.body;
  try {
    const likes = showsService.addLike({ id });
    res.json(ResponseHelper.createAPIResponse(likes))
  } catch (error) {
    res.status(500).json(ResponseHelper.createAPIError(error));
  }
});

module.exports = (app) => {
  app.use('/v1/shows', router);
}
