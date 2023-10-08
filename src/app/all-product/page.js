import Image from 'next/image';
import React from 'react';
import background from '../../../public/background.jpg'
import CommonTitle from '@/Components/CommonTitle/CommonTitle';
import CommonCart from '@/Components/CommonCart/CommonCart';
import { getAllAdminProducts } from '@/services/product';

const AllShop = async () => {

     const newData = await getAllAdminProducts();
     return (
          <div>
               <div>
                    <div className=' w-full h-[70vh]  relative '>
                         <Image className=' relative w-full h-[70vh] object-fill ' src={background} alt=''></Image>
                         <div className=' text-white absolute top-0 w-full h-full flex justify-center items-center flex-col gap-4  '>
                              <h1 className=' text-xl md:text-5xl font-bold '> Jewelry Shop </h1>
                              <p className=' text-base md:text-xl font-medium my-1 lead'> Best Online Gold Jewelry Shopping In Bangladesh</p>

                         </div>
                    </div>

               </div>
               <div className=' my-5'>
                    <CommonTitle title={"All Products"} pra={"Add our products to weekly lineup"} ></CommonTitle>
               </div>

               <CommonCart data={newData?.data}></CommonCart>

               <div>

               </div>
          </div>
     );
};

export default AllShop;