import React from 'react';
import { Link } from "react-router-dom";
import './Welcome.scss';

const Welcome = () => {
  return (
    <section className='welcome-container'>
      <div>
        <h2>Welcome</h2>
        <p>Select your community and log-in</p>
          <form>
            <input placeholder='Community' />
            <input placeholder='Name' />
            <Link to='/communityboard'>
              <button type='button'>SUBMIT</button>
            </Link>
          </form>
      </div>
    </section>
  );
};

export default Welcome;