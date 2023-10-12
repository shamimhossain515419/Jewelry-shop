
'use client'
import { GlobalContext } from '@/Contaxt';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AiOutlineClose, AiOutlineLogout } from 'react-icons/ai';
import CommonLoader from '../CommonCart/CommonLoader/CommonLoader';
import Image from 'next/image';
import { BsFillTrash3Fill } from 'react-icons/bs'
import { cartDeleteById } from '@/services/product';
const SidBarCar = ({ setOpenModal }) => {
     const { user, LogOut, cartData, getCartData } = useContext(GlobalContext);


     const handleLogout = async () => {
          const data = await LogOut();

          if (data) {
               toast.success('Successfully Register!')
               getCartData(user?.email);
               setOpenModal(false)
          }
     }

     const handleDelete = async (id) => {
          const data = await cartDeleteById(id);
          if (data.success == true) {
               setOpenModal(false)
               toast.success(data?.message)
          }
     }


     return (
          <div>
               <div >
                    <div className=' flex flex-col gap-4 mt-4 '>
                         <div>
                              {
                                   cartData?.length <= 0 ? <div onClick={() => setOpenModal(false)} className=' text-center mx-auto'><Link href={'/all-product'} className=' text-center  w-full mx-auto text-white bg-[#27895C] px-7 py-[7px] '> add To cart </Link></div> : <>

                                        {
                                             cartData?.length >= 0 ? (cartData?.map(item => <div key={(item._id)}>

                                                  <div className=' flex items-center  justify-between gap-2 '>
                                                       <div>
                                                            <Image width={80} height={80} className=' h-[50px] w-[50px] object-fill' src={item?.image} alt=''></Image>
                                                       </div>
                                                       <h1 className=' text-base font-medium '> {item?.name.slice(0, 10)}... </h1>
                                                       <BsFillTrash3Fill onClick={() => handleDelete(item?._id)} className=' text-red-600  cursor-pointer' size={20}></BsFillTrash3Fill>
                                                  </div>

                                             </div>)) : <CommonLoader></CommonLoader>
                                        }</>

                              }
                         </div>

                    </div>

                    <div className=' mb-0 pt-8 absolute flex justify-center w-full items-center   bottom-0 text-center mx-auto '>
                         <div className="   ">
                              <div >
                                   <button
                                        type="button"
                                        onClick={() => {
                                             router.push("/cart");
                                             setShowCartModal(false);
                                        }}
                                        className="mt-1.5 w-full inline-block bg-[#27895C] text-white px-5 py-3 text-xs font-medium uppercase tracking-wide"
                                   >
                                        Go To Cart
                                   </button>
                                   <button

                                        type="button"
                                        onClick={() => {
                                             router.push("/checkout");
                                             setShowCartModal(false);
                                        }}
                                        className="mt-1.5 w-full inline-block bg-[#27895C] text-white px-5 py-3 text-xs font-medium uppercase tracking-wide disabled:opacity-50"
                                   >
                                        Checkout
                                   </button>
                                   <div className="mt-6 flex justify-center text-center text-sm text-gray-600">
                                        <button type="button" className="font-medium text-grey">
                                             Continue Shopping
                                             <span aria-hidden="true"> &rarr;</span>
                                        </button>
                                   </div>
                                   <div onClick={handleLogout} className=' cursor-pointer text-xl font-medium my-2 '>
                                        Logout
                                   </div>
                              </div>
                         </div>

                    </div>
                    <AiOutlineClose onClick={() => setOpenModal(false)} size={24} className={" cursor-pointer absolute top-2 right-1 "}></AiOutlineClose>
               </div>
          </div>
     );
};

export default SidBarCar;