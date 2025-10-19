import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const FindUs = () => {
  return (
    <div className='space-y-3 w-full'>
      <h1 className='font-bold'>Find Us</h1>
      <div   className='space-y-3 flex flex-col '>
        <button className="btn btn-lg flex gap-3  "> <FaFacebookSquare />
FaceBook</button>
        <button className="btn btn-lg flex gap-3 "><FaSquareXTwitter />
Twitter</button>
        <button className="btn  btn-lg flex gap-3"><FaInstagramSquare />
Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;