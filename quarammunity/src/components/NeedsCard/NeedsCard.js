import React from 'react';
import { Link } from "react-router-dom";
import './NeedsCard.scss';

const NeedsCard = () => {
  return (
    <article>
      <h3>Name: Ben Firth</h3>
      <h3>Need: Toilet Paper</h3>
      <h4>Street Address: 2201 Table Dr.</h4>
      <Link to='/needsshow'>
        <button type='button'>Click for further information</button>
      </Link>
    </article>
  );
};

export default NeedsCard;