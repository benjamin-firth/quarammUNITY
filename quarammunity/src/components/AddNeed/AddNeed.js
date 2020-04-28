import React from 'react';
import './AddNeed.scss';

const AddNeed = () => {
  return (
    <section>
      <div className='enter-need-box'>
        <h2>Add Your Need for People to See</h2>
        <form>
          <label>Need:</label>
          <input placeholder='Enter Need Here' />
          <label>Address:</label>
          <input placeholder='Enter Address Here' />
          <label>Further Information:</label>
          <textarea placeholder='Enter Any Further Information Here' />
          <button>SUBMIT NEED REQUEST</button>
        </form>
      </div>
    </section>
  )
}

export default AddNeed;