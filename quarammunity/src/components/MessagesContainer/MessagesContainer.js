import React from 'react';
import Message from '../Message/Message';
import './MessagesContainer.scss';

const MessagesContainer = () => {
  return (
    <section>
      <div className='scroll-container'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </section>
  );
};

export default MessagesContainer;