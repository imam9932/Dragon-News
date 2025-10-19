import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
  const [categoryNews,setCategoryNews]=useState([]);
  const {id}=useParams()
  const data=useLoaderData()
 
  useEffect(()=>{
    if(id=='0'){
      setCategoryNews(data);
      return;
    }
    else if(id=="1"){
      const filteredNews=data.filter(news=>news.others.is_today_pick==true);
      console.log(filteredNews)
      setCategoryNews(filteredNews);
      return;
    }
    else{
    const filteredNews=data.filter(news=>news.category_id == id);
    console.log(filteredNews)
  setCategoryNews(filteredNews)}
  },[data,id])
  return (
    <div>
      <h2 className='font-bold mt-5'>Total <span>{categoryNews.length}</span> news found </h2>
      <div className='grid grid-cols-1 gap-5'>
        {
          categoryNews.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;