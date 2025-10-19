import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayOut/LeftAside';
import RightAside from '../Components/HomeLayOut/RightAside';

const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <header>
        <Header></Header>
        </header>
        <section className='mx-auto'>
          <LatestNews></LatestNews>
        </section>
        <nav className='mt-5'>
          <Navbar></Navbar>
        </nav>
      <main className='grid grid-cols-12 mt-5 gap-3'>
        <section className='left-div col-span-3'>
          <aside className='sticky top-0 h-fit'>
            <LeftAside></LeftAside>
          </aside>
        </section>
        <section className='main col-span-6'>
          <Outlet></Outlet>
        </section>
        <section className='right-div col-span-3'>
           <aside className='sticky top-0 h-fit'>
             <RightAside></RightAside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Home;