import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const {createUser}=use(AuthContext);
  const handleRegister=(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const image=form.image.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(name,image,email,password);
    createUser(email,password)

  }
  return (
     <div className="hero bg-base-200 mt-5 min-h-screen">
      <div className="hero-content flex-col  ">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Register your account!</h1>
          
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
             {/* name */}
              <label className="label">Your Name</label>
              <input type="text" name='name' className="input" placeholder='Your name' required />
              {/* image URL */}
              <label className="label">Image URl</label>
              <input type="text" name='image' className="input" placeholder='Your Image URL' required />
              {/* email */}
               <label className="label">Email Address</label>
              <input type="email" name='email' className="input" placeholder='Your Email' required />
              {/* password */}
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Your Password" required />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <p className='mt-2 text-center'>Already have an account ?. please <Link to={'/auth/login'} className='text-blue-400 underline'>Log-in</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;