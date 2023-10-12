import Link from 'next/link';
import React from 'react';

const CommonNotFound = ({ title, path, pra }) => {
     return (
          <div className=' flex h-[60vh] w-full justify-center flex-col  items-center gap-4' >
              
                    <h1 className=' text-xl  font-medium  text-center '> {pra} </h1>
                    <Link className=' bgColor text-white px-4 py-2 ' href={`/${path}`}> {title} </Link>
             
          </div>
     );
};

export default CommonNotFound;