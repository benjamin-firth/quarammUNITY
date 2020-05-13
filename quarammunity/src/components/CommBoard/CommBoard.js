import React from 'react';
import { useSelector } from 'react-redux';
import NeedsCard from '../NeedsCard/NeedsCard';
import './CommBoard.scss';

const CommBoard = () => {
  const currentNeeds = useSelector(state => state.currentNeeds);
  const testNeed = {
    name: 'Whitney Burton',
    need: 'Toilet Paper',
    address: '2201 Table Dr.',
    info: 'I am ALL out'
  };

  const displayedNeeds = currentNeeds.map(need => <NeedsCard key={Math.random()} needRequest={need} />);

  return (
    <section>
      <div className='comm-container'>
        <NeedsCard needRequest={testNeed} />
        {displayedNeeds}
      </div>
    </section>
  );
};

export default CommBoard;