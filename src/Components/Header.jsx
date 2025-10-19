import React from 'react';
import logo from '../../dragon-news-resources/assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-5 w-11/12 space-y-2'>
        <img src={logo} alt="" />
        <p className='text-gray-500'>Journalism Without Fear or Favour</p>
      
        <p>{format(new Date(),'EEEE , MMMM dd , yyyy')}</p>
      </div>
    </div>
  );
};

export default Header;