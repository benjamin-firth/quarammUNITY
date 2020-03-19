import React from 'react';
import { Link } from "react-router-dom";
import './LoggedInHeader.scss';

const LoggedInHeader = () => {
  return (
    <header>
      <div>
        <h1>quarammUNITY</h1>
        <h3>Even in quarantine, we are stronger together</h3>
      </div>
      <div className='header-nav-container'>
        <Link to='/communityboard'>
          <h2>Home</h2>
        </Link>
        <h2>Add Need Request</h2>
        <Link exact="true" to='/'>
          <h2>Logout</h2>
        </Link>
      </div>
    </header>
  );
};

export default LoggedInHeader;