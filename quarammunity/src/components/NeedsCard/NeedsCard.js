import React from 'react';
import { Link } from "react-router-dom";
import './NeedsCard.scss';

const NeedsCard = ({ needRequest }) => {
  const { name, need, address, info } = needRequest;

  return (
    <article>
      <h3>Name: {name}</h3>
      <h3>Need: {need}</h3>
      <h4>Street Address: {address}</h4>
      <Link to='/needsshow'>
        <button type='button'>Click for further information</button>
      </Link>
    </article>
  );
};

export default NeedsCard;