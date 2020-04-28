import React from 'react';

const AddNeed = () => {
  return (
    <section>
      <div>
        <h2>Add Your Need for People to See:</h2>
        <form>
          <label>Need:</label>
          <input placeholder='Enter Need Here' />
          <label>Further Information:</label>
          <input placeholder='Enter Any Further Information Here' />
          <button>SUBMIT NEED REQUEST</button>
        </form>
      </div>
    </section>
  )
}

export default AddNeed;