'use client'


import { GlobalContext } from '@/Contaxt';
import Image from 'next/image';
import React, { useContext } from 'react';

const DashboardProfile = () => {
     const { user } = useContext(GlobalContext)
     return (
          <div className='  flex justify-center items-center  w-full  '>
               <div>
                    <h1 className=' text-3xl font-medium my-2 '>Name: {user?.displayName} </h1>
                    <h1 className=' text-xl font-medium my-2 '>Email: {user?.email} </h1>
               </div>
          </div>
     );
};

export default DashboardProfile;