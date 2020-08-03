import React, { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';

import Search from './components/search/Search';
import ShowsList from './components/list/ShowsList';
import ShowsService from './services/ShowsService';

const App = () => {

  const [shows, setShows] = useState([]);
  const [likes, setLikes] = useState([]);

  const submitChoice = async (value) => {
    const shows = await ShowsService.getShows(value);

    if (shows.length > 0) {
      setShows(shows);
    }
  };

  const onLike = (id) => {
    const alreadyLiked = likes.data.data.find(item => item.id === '' + id);
    if (alreadyLiked) {
      return;
    }
    ShowsService.addLike(id);
  };

  useEffect(() => {
    const getLikes = async () => {
      setLikes(await ShowsService.getLikes());
    }
    getLikes();
  }, []);
  
  return (
    <Container>
      <Search onSubmit={submitChoice}></Search>
      <ShowsList items={shows} onLike={onLike}></ShowsList>
    </Container>
  );
}

export default App;
