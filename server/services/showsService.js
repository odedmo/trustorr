const ShowModel = require('../data/models/Show');

const getAllShows = () => {
  return ShowModel.find();
}

module.exports = {
  getAllUsers
}
