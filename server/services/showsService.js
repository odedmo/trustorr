const ShowModel = require('../data/models/Show');
const axios = require('axios');

const getShows = query => {
  return axios.get(`http://api.tvmaze.com/search/shows?q=${query.q}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}

const getLikes = () => {
  return ShowModel.find();
};

const addLike = ({ id }) => {
  return ShowModel({ id }).save();
};

module.exports = {
  getShows,
  getLikes,
  addLike
}
