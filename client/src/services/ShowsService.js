import axios from 'axios';

const baseUrl = 'http://localhost:8080/v1/shows';

const getShows = async (value) => {
  try {
    const shows = await axios.get(`${baseUrl}?q=${value}`);
    return shows.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const getLikes = async () => {
  try {
    const likes = await axios.get(`${baseUrl}/likes`);
    return likes;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const addLike = (id) => {
  axios.post(`${baseUrl}`, id);
};

export default {
  getShows,
  getLikes,
  addLike
};