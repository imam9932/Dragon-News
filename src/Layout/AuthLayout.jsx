import React from 'react';
import Navbar from '../Components/Navbar';
import { Link, Outlet } from 'react-router';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const AuthLayout = () => {
  return (
    <div className='w-11/12 mx-auto mt-5'>
      <header>
        <Navbar></Navbar>
      </header>


     <main>
      <Outlet></Outlet>
     </main>
    </div>
  );
};

export default AuthLayout;