import React from 'react';

import './ShowCard.css';

const ShowCard = props => {
  
  return (
    <li className="card" onClick={() => {props.onClick(props.id)}}>
      <div className="image-wrapper">
        <img 
          src={props.image} 
          alt={props.name}
        />
      </div>
      {props.name}
    </li>
  );

}

export default ShowCard;