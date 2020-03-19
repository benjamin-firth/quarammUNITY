import React from 'react';
import './CommBoard.scss';
import NeedsCard from '../NeedsCard/NeedsCard';

const CommBoard = () => {
  return (
    <section>
      <div className='comm-container'>
        <NeedsCard />
        <NeedsCard />
        <NeedsCard />
        <NeedsCard />
      </div>
    </section>
  );
};

export default CommBoard;