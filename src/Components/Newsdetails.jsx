import React, { useEffect, useState } from 'react';
import Header from './Header';
import RightAside from './HomeLayOut/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const Newsdetails = () => {
  const data=useLoaderData();
  const {id}=useParams();
  const {news,setNews}=useState({});
  console.log(data,id,news);

  useEffect(()=>{
    const newsDetails=data.find((singleNews)=>singleNews.id==id
    );
    setNews(newsDetails);
    // console.log(news);
  },[data,id]);
  return (
    <div className='w-11/12 mx-auto'>
       <Header></Header>
       <main className='grid grid-cols-12'>
        <aside className='col-span-9'>
          <h1 className='font-bold'>News Details</h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </aside>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <RightAside></RightAside>
        </aside>
       </main>
    </div>
  );
};

export default Newsdetails;