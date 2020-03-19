import React from 'react';
import './NeedsShow.scss';
import MessagesContainer from '../MessagesContainer/MessagesContainer';

const NeedsShow = () => {
  return (
    <section className='needs-show-container'>
      <div>
        <h2>Name: Ben Firth</h2>
        <h3>Need: Toilet Paper</h3>
        <h4>Street Address: 2201 Table Dr.</h4>
        <h4>Further Information:</h4>
        <p>We are completely out of toilet paper and afraid to go outside.  If anyone could spare some we'd really appreciate it.  We can venmo you.</p>
      </div>
      <MessagesContainer />
    </section>
  );
};

export default NeedsShow;