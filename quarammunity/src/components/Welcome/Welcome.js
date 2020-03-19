import React from 'react';
import './Welcome.scss';

const Welcome = () => {
  return (
    <section>
      <div>
        <h2>Welcome</h2>
        <p>Select your community and log-in</p>
        <form>
          <input placeholder='Community' />
          <input placeholder='Name' />
          <button type='button'>SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default Welcome;