'use client'

import Image from 'next/image';
import React from 'react';


const CommonCart = ({ data }) => {

     console.log(data);
     return (
          <div>
               <div>
                    <div className=' max-w-[2400] 2xl:px-[280px] md:mx-20 xl:px-24 md:px-16 px-3'>
                         {data?.length > 1 ? <div className=' grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 '>
                              {data?.map(item => <div key={item?._id}>

                                   <div class='CartBox'>
                                        <div class='image-container'>
                                             <Image class='object-fill rounded-lg' width='400' height='200' src={item?.image} alt='' />
                                             <div class='overlay'>

                                                  <div  className='   text-base font-light'>
                                                       <p>Love</p>
                                                       <p>share</p>
                                                       <p>wind</p>
                                                  </div>
                                                  <button class='bgColor text-white px-4 py-2 rounded-lg capitalize'>Add button</button>
                                             </div>
                                        </div>
                                   </div>

                                   <div className=' p-3 text-center space-y-2 mt-4'>
                                        <p className=' uppercase text-sm'> {item?.brands}</p>
                                        <p className=' hover:text-[#c2995898]'> {item?.name.slice(0, 25)}...</p>
                                        <p className=' text-sm'> $ {item?.price.toFixed(2)} </p>

                                   </div>



                              </div>)
                              }
                         </div> : <p className=" text-center  flex items-center h-screen w-full"> loading ....</p>
                         }

                    </div>
               </div>


          </div>
     );
};

export default CommonCart;