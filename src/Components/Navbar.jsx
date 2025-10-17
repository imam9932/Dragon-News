import React from 'react';
import { NavLink } from 'react-router';
import userImg from '../../dragon-news-resources/assets/user.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div></div>
      <div className='gap-5 flex text-gray-500'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className='flex gap-2'>
        <img src={userImg} alt="userImg" />
        <button className='btn px-10 bg-black text-white'>Log-In</button>
      </div>
    </div>
  );
};

export default Navbar; 