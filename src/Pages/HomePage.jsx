import React from 'react';
import DragonNewsHome from '../Components/DragonNewsHome';
import { Navigate } from 'react-router';

const HomePage = () => {
  return  <Navigate to={'/category/1'}></Navigate>
};

export default HomePage;