import React from 'react';
import LeftNav from './LeftNav';
import NewsContainer from './NewsContainer';
import RightNav from './RightNav';

const Body = () => {
  return (
    <div className='grid grid-cols-4'>
      <div>
        <LeftNav></LeftNav>
      </div>
      <div className='col-span-2'>
        <NewsContainer></NewsContainer>
      </div>
      <div>
        <RightNav></RightNav>
      </div>
    </div>
  );
};

export default Body;