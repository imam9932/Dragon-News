import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Layout/Home.jsx';
import HomePage from './Pages/HomePage.jsx';
import CategoryNews from './Pages/CategoryNews.jsx';

const router = createBrowserRouter([
  {
    
    path: "/",
   Component:Home,
   children:[
    {
      path:'/',
      Component:HomePage,
    },
    {
      path:'/category/:id',
      Component:CategoryNews,
    },
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
