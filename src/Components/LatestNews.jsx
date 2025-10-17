import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className='flex items-center gap-5 bg-base-200 p-3 justify-center mt-5'>
     <button className='text-base-100 bg-secondary px-4 py-2'>Latest</button>
     <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
      <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem consectetur quae necessitatibus sint id.
     </p>
      <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem consectetur quae necessitatibus sint id.
     </p>
      <p className='font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem consectetur quae necessitatibus sint id.
     </p>
     </Marquee>
      </div>

  );
};

export default LatestNews;