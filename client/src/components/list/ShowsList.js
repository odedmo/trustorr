import React from 'react';

import ShowCard from './ShowCard'
import './ShowsList.css';

const ShowsList = props => {
  if (props.items.length === 0) {
    return (
      <div>
        No Shows
      </div>
    )
  }

  return (
    <ul className="shows-list-wrapper">
      {props.items.map(show => 
        <ShowCard 
          onClick={props.onLike}
          key={show.show.id}
          id={show.show.id}
          name={show.show.name}
          image={show.show && show.show.image && show.show.image.original}
        />
      )}
    </ul>
  );

}

export default ShowsList;