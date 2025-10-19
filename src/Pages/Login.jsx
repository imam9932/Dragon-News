import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
     <div className="hero bg-base-200 mt-5 min-h-screen">
  <div className="hero-content flex-col  ">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold">Login your account!</h1>
      
    </div>
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <div className="card-body">
        <form>
          <fieldset className="fieldset">
          <label className="label">Email Address</label>
          <input type="email" name='email' className="input" placeholder='Your Email' />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Your Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className='mt-2 text-center'>Don't have any account ?. please <Link to={'/auth/register'} className='text-blue-400 underline'>Register</Link></p>
        </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;