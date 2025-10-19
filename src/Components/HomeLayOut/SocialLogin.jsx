import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  return (
    <div>
      <h2 className='font-bold mb-5'>Login With</h2>
      <div className='space-y-2'>
        <button className='flex items-center gap-2 text-blue-400 border-1 border-blue-300 px-2 py-1 text-sm rounded-md hover:bg-purple-700 hover:text-white'> <FaGoogle />
Login with Google</button>
        <button className='flex items-center gap-2 text-gray-600 text-sm border-1 border-gray-500 px-2.5 py-1 rounded-md hover:bg-gray-700 hover:text-white'> <FaGithub
 />
Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;