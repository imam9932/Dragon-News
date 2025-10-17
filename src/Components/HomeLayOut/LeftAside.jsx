import React, { Suspense } from 'react';
import AllCategories from '../AllCategories';

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
}>

       <AllCategories></AllCategories>
      </Suspense>
    </div>
  );
};

export default LeftAside;