import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginCurrentUser } from '../../actions';
import './Welcome.scss';

const Welcome = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [community, setCommunity] = useState('');
  const currentUser = useSelector(state => state.currentUser);

  const enterCommunity = (e) => {
    setCommunity(e.target.value)
  };

  const enterName = (e) => {
    setName(e.target.value)
  };

  const login = (e) => {
    e.preventDefault();

    const user = {
      name,
      community
    };

    dispatch(loginCurrentUser(user));
  };

  return (
    currentUser.name ? <Redirect to='communityboard' /> :
    <section className='welcome-container'>
      <div>
        <h2>Welcome</h2>
        <p>Select your community and log-in</p>
          <form>
            <input 
              placeholder='Community' 
              type='text' 
              id='stateCommunity' 
              value={community} 
              onChange={(e) => enterCommunity(e)}/>
            <input 
              placeholder='Name' 
              type='text' 
              id='stateName' 
              value={name} 
              onChange={(e) => enterName(e)}/>
            <button 
              type='button' 
              onClick={(e) => login(e)}>SUBMIT</button>
          </form>
      </div>
    </section>
  );
};

export default Welcome;