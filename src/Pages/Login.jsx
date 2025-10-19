import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
   
  const {login,setError,error}=use(AuthContext);
  const location=useLocation();
  const navigate=useNavigate();
  const handleLogin=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log( email,password);
login(email,password);
navigate(`${location.state ? location.state : '/'}`);
  }
  return (
     <div className="hero bg-base-200 mt-5 min-h-screen">
  <div className="hero-content flex-col  ">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold">Login your account!</h1>
      
    </div>
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
          <label className="label">Email Address</label>
          <input type="email" name='email' className="input" placeholder='Your Email' required />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Your Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className='mt-2 text-center'>Don't have any account ?. please <Link to={'/auth/register'} className='text-blue-400 underline'>Register</Link></p>
        {
          error && <p className='text-red-700 text-sm'>{error.code}</p>
        }
        </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;