'use client'

import Image from 'next/image';


import { TfiReload } from 'react-icons/tfi'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { GlobalContext } from '@/Contaxt';
import { toast } from 'react-toastify';
import Notification from '../Notifications/Notifiacations';
import { useContext } from 'react';
import { CartAddProduct } from '@/services/product';
const CommonCart = ({ data }) => {
     const { user, getCartData } = useContext(GlobalContext)
     const router = useRouter();
     const handleAddToCart = async (item) => {
          const newData = {
               email: user?.email, name: item?.name, productId: item?.productId, priceDrop: item?.priceDrop, price: item?.price, image: item?.image
          }
          const data = await CartAddProduct(newData)
          if (data.success == true) {
               getCartData(user?.email)
               toast.success("successfully cart add");
               router.push('/')
          } else {
               toast.error(data.massage)
          }
     }

     return (
          <div>
               <div>
                    <div className=' max-w-[2400] 2xl:px-[280px] md:mx-20 xl:px-24 md:px-16 px-3'>
                         {data?.length > 1 ? <div className=' grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 '>
                              {data?.map(item => <div key={item?._id}>
                                   <div className='CartBox cu'>
                                        <div className='image-container'>
                                             <Image onClick={() => router.push(`/all-product/${item?._id}`)}  className='object-fill rounded-lg' width='400' height='200' src={item?.image} alt='image' />
                                             <div className='overlay flex  flex-col  justify-between '>

                                                  <div className='  mr-2   space-y-2 gap-3'>
                                                       <div className=' bg-white  shadow-lg hover:text-white rounded-full hover:bg-[#c29958]  duration-200  cursor-pointer  inline-block  p-2' >
                                                            <AiOutlineHeart size={28}></AiOutlineHeart>
                                                       </div>
                                                       <div className=' bg-white hover:text-white rounded-full  hover:bg-[#c29958]  duration-200 cursor-pointer w-[44px]  p-2' >
                                                            <FiSearch size={28}></FiSearch>
                                                       </div>
                                                       <div className=' bg-white hover:text-white rounded-full hover:bg-[#c29958]  duration-200  cursor-pointer inline-block  p-2' >
                                                            <TfiReload size={24}></TfiReload>
                                                       </div>


                                                  </div>
                                                  <button onClick={() => handleAddToCart(item)} className=' bg-white  hover:bg-[#c29958]  duration-200  block bottom-0 hover:text-white px-4 py-2 rounded-lg capitalize'>Add to Cart</button>
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
               <Notification></Notification>


          </div>
     );
};

export default CommonCart;