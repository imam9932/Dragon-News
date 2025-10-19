import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../../dragon-news-resources/assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const {user,logout}=use(AuthContext)
  const handleSignout=()=>{
    logout();
  }
  return (
    <div className='flex justify-between items-center'>
      <div>{user && user.email}</div>
      <div className='gap-5 flex text-gray-500'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className='flex gap-2'>
        <img src={userImg} alt="userImg" />
        {
          user? < button onClick={handleSignout} className='btn px-8 bg-black text-white'>Log-out</button> :  <Link to={'/auth/login'} className='btn px-10 bg-black text-white'>Log-In</Link>
        }
       
      </div>
    </div>
  );
};

export default Navbar; 