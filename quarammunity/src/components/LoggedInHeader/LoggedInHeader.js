import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutCurrentUser } from '../../actions';
import './LoggedInHeader.scss';


const LoggedInHeader = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  
  const logout = () => {
    console.log('firing');
    dispatch(logoutCurrentUser())
  };

  return (
    !currentUser.name ? <Redirect exact to='/' /> :
    <header>
      <div>
        <h1>quarammUNITY</h1>
        <h3>Even in quarantine, we are stronger together</h3>
      </div>
      <div className='header-nav-container'>
        <Link to='/communityboard'>
          <h2>Home</h2>
        </Link><Link to='/addneed'>
          <h2>Add Need Request</h2>
        </Link>
        <h2><a 
          type='button'
          onClick={logout}>Logout</a></h2>
      </div>
    </header>
  );
};

export default LoggedInHeader;