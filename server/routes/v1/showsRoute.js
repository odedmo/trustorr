const express = require('express');
const showsService = require('../../services/showsService');
const ResponseHelper = require('../../services/responseHelper');
const router = express.Router();

router.get('/', async (req, res) => {
  
});

router.post('/', async (req, res) => {
  
});

router.put('/', async (req, res) => {
  
});

module.exports = (app) => {
  app.use('/v1/shows', router);
}
