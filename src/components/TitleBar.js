import React from 'react';
import moment from 'moment';

const TitleBar = (props) => {
  return (
    <div id='titlebar'>
      <div className='title'>{props.hut[0].nameZh}</div>
      <div className='apply'>前往申請</div>
      <div className='info'>
        <div className='bed-count'>床位：{props.hut[0].capacity}</div>
        <div className='update-time'>更新時間：{moment(props.hut[0].capacityStatuses.dateCrawl).format('MM/DD HH:mm')}</div>
      </div>
    </div>
  );
};

export default TitleBar;
