import React from 'react';

const Chart = () => {
  return (
    <div className='chart'>
      <div className='bar-container'>
        <div className='bar'>
          <div className='count'>10</div>
          <div className='remaining'></div>
        </div>
        <div className='bar'>
          <div className='count'>20</div>
          <div className='applying'></div>
        </div>
      </div>
      <div className='day'>27</div>
    </div>
  );
};

export default Chart;
