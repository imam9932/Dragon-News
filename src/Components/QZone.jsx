import React from 'react';
import swimming from '../../dragon-news-resources/assets/swimming.png';
import classImg from '../../dragon-news-resources/assets/class.png';
import playGround from '../../dragon-news-resources/assets/playground.png'

const QZone = () => {
  return (
    <div className='bg-base-200 p-3'>
      <h1 className='font-bold'>QZOne</h1>
      <div className='flex flex-col items-center justify-center space-y-5'>
<img src={swimming} alt="" />
<img src={classImg} alt="" />
<img src={playGround} alt="" />
      </div>
    </div>
  );
};

export default QZone;