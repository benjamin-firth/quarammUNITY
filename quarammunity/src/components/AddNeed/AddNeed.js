import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitNeedRequest } from '../../actions';
import './AddNeed.scss';

const AddNeed = () => {
  const dispatch = useDispatch();
  const [need, setNeed] = useState('');
  const [address, setAddress] = useState('');
  const [info, setInfo] = useState('');
  const currentUser = useSelector(state => state.currentUser);

  const enterNeed = (e) => {
    setNeed(e.target.value)
  };

  const enterAddress = (e) => {
    setAddress(e.target.value)
  };

  const enterInfo = (e) => {
    setInfo(e.target.value)
  };

  const submitNeed = (e) => {
    e.preventDefault();

    const needRequest = {
      name: currentUser.name,
      need,
      address,
      info
    };

    dispatch(submitNeedRequest(needRequest));
  };

  return (
    <section>
      <div className='enter-need-box'>
        <h2>Add Your Need for People to See</h2>
        <form>
          <label>Need:</label>
          <input 
            placeholder='Enter Need Here'
            type='text' 
            id='stateNeed' 
            value={need} 
            onChange={(e) => enterNeed(e)}/>
          <label>Address:</label>
          <input 
            placeholder='Enter Address Here'
            type='text' 
            id='stateAddress' 
            value={address} 
            onChange={(e) => enterAddress(e)}/>
          <label>Further Information:</label>
          <textarea 
            placeholder='Enter Any Further Information Here' 
            id='stateInfo' 
            value={info} 
            onChange={(e) => enterInfo(e)}/>
          <button
            type='button' 
            onClick={(e) => submitNeed(e)}>SUBMIT NEED REQUEST</button>
        </form>
      </div>
    </section>
  )
}

export default AddNeed;