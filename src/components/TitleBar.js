import React from 'react';

const TitleBar = () => {
  return (
    <div id='titlebar'>
      <div className='title'>樂樂山屋</div>
      <div className='apply'>前往申請</div>
      <div className='info'>
        <div className='bed-count'>床位：</div>
        <div className='update-time'>更新時間：</div>
      </div>
    </div>
  );
};

export default TitleBar;
