import React from 'react';
import { RingLoader } from 'react-spinners';
const loading = () => {
     return (
          <div className=' flex justify-center  items-center  absolute bg-white w-full h-screen '>
                <RingLoader color="#36d7b7" />
          </div>
     );
};

export default loading;