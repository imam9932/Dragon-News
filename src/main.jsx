import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Layout/Home.jsx';
import HomePage from './Pages/HomePage.jsx';
import CategoryNews from './Pages/CategoryNews.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AuthLayout from './Layout/AuthLayout.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Logout from './Pages/Logout.jsx';
import Newsdetails from './Components/Newsdetails.jsx';
import PrivateRoute from './Provider/PrivateRoute.jsx';

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
      loader:()=>fetch('/news.json'),
    },
   ]
  },
  {
    path:'/auth',
     Component:AuthLayout,
    children:[
      {
        path:'/auth/login',
        Component:Login,
      },
      {
        path:'/auth/register',
      Component:Register,
      },
      {
        path:'/auth/logout',
      Component:Logout,
      }
    ]
  },
  {
    path:'/news-details/:id',
     element:<PrivateRoute>
      <Newsdetails></Newsdetails>
     </PrivateRoute>,
    loader:()=> fetch("/news.json"),
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
