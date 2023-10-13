
import { GlobalContext } from '@/Contaxt';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';

const CommonCheckOut = ({ item }) => {
     const { user, address } = useContext(GlobalContext)
     const [currentAddress, setCurrentAddress] = useState(false);
     const router = useRouter();

     const handleCheckout = async () => {

     }

     return (
          <div className=' grid md:grid-cols-2 gap-4'>
               <div>

                    <div>
                         {address?.length ? <><h1 className=' my-2 text-xl font-medium textColor'> Select Address</h1>

                              {
                                   address?.map(item => <div onClick={() => setCurrentAddress(item)} className={`border  ${currentAddress?._id == item?._id ? "border-[#c29958]" : ""} p-6`} key={item._id}>
                                        <p>Name : {item.fullName}</p>
                                        <p>Address : {item.address}</p>
                                        <p>Country : {item.country}</p>
                                        <p>Phone : {item.phone}</p>
                                        <p>post : {item.post}</p>
                                   </div>)
                              }
                              <button
                                   onClick={() => router.push("/dashboard/account-setting")}
                                   className="mt-5 mr-5 inline-block bgColor text-white px-5 py-3 text-xs font-medium uppercase tracking-wide"
                              >
                                   Add new address
                              </button></> : (
                              <div>
                                   <div className='  flex justify-center flex-col items-center gap-2 h-[50vh] '>
                                        <h1 className=' text-xl'> No addresses added</h1>
                                        <button
                                             onClick={() => router.push("/dashboard/account-setting")}
                                             className="mt-5 mr-5 inline-block bgColor text-white px-5 py-3 text-xs font-medium uppercase tracking-wide"
                                        >
                                             Add new address
                                        </button>
                                   </div>
                              </div>
                         )
                         }
                    </div>

               </div>
               <div>
                    <div className='flex gap-4 '>
                         <Image src={item?.image} alt='' width={100} height={100}></Image>
                         <div>
                              <h1 className=' text-xl  font-medium '> {item?.name} </h1>

                         </div>
                    </div>
                    <div>
                         <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900">Price</p>
                              <p className="text-lg font-bold text-gray-900">{item?.price}.00 $ </p>
                         </div>
                         <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900">Shopping</p>
                              <p className="text-lg font-bold text-gray-900">Free</p>
                         </div>
                         <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900">Discount</p>
                              <p className="text-lg font-bold text-gray-900">  {item?.priceDrop ? item?.priceDrop : 0}% </p>
                         </div>
                         <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900">Total Price</p>
                              <p className="text-lg font-bold text-gray-900"> {(item?.price) - (item?.price * (item?.priceDrop / 100))}.00 $</p>
                         </div>
                    </div>

                    <div>
                         <div className="pt-10">
                              <button
                                   disabled={!currentAddress}

                                   onClick={handleCheckout}
                                   className="disabled:opacity-50 mt-5 mr-5 w-full  inline-block bgColor text-white px-5 py-3 text-xs font-medium uppercase tracking-wide"
                              >
                                   Checkout
                              </button>
                         </div>
                    </div>


               </div>
          </div>
     );
};

export default CommonCheckOut;