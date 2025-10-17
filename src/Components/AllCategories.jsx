import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise=fetch('/categories.json').then((res)=>res.json());

const AllCategories = () => {
   const categories=use(categoryPromise);
  return (
    <div className=''>
      <h1 className='font-bold'>All Categories ({categories.length})</h1>
      <div className='grid grid-cols-1 space-y-2 mt-2'>
        {categories.map((category)=>
          ( <NavLink key={category.id} className='btn bg-white hover:bg-gray-300' to={`/category/${category.id}`}>{category.name}</NavLink>))}
      </div>
    </div>
  );
};

export default AllCategories;