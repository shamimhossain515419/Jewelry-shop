

import { CgProfile } from "react-icons/cg";

import { MdPayments, MdSubscriptions } from "react-icons/md";
import { BsKey, BsLock } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";


import Link from 'next/link';
import React from 'react';
import Container from "@/Components/Container/Container";
import GlobalState from "@/Contaxt";

const layout = ({ children }) => {
     return (
          <Container>

               <GlobalState>
                    <div className=" md:flex gap-8 ">

                         <div className="  my-5">

                              <div className=" max-w-[350px] md:w-[350px]  ">
                                   <Link className=" bgColor flex items-center text-2xl px-4 py-2  gap-3  w-full  font-medium capitalize text-white" href={'/dashboard'}> Dashboard Menu</Link>
                              </div>
                              <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                                   <Link className=" bgColor flex items-center text-2xl px-4 py-2  gap-3  w-full  font-medium capitalize text-white" href={'/dashboard/checkout'}>   < CgProfile size={24}></CgProfile> Checkout  </Link>
                              </div>
                              <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                                   <Link className=" bgColor flex items-center text-2xl px-4 py-2  gap-3  w-full  font-medium capitalize text-white" href={'/dashboard/setting'}>   <BsKey size={24}></BsKey> Account setting  </Link>
                              </div>
                              <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                                   <Link className=" bgColor flex items-center text-2xl px-4 py-2  gap-3  w-full  font-medium capitalize text-white" href={'/dashboard/shopping'}>   <BsLock size={24}></BsLock> Billing & Shipping Info   </Link>
                              </div>
                              <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                                   <Link className=" bgColor flex items-center text-2xl px-4 py-2  gap-3  w-full  font-medium capitalize text-white" href={'/dashboard/payment'}>   <MdPayments size={24}></MdPayments> Payment info   </Link>
                              </div>
                              <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                                   <Link className=" bgColor flex items-center text-2xl px-4 py-2  gap-3  w-full  font-medium capitalize text-white" href={'/dashboard/history'}>   <FiRefreshCcw size={24}></FiRefreshCcw> Product history  </Link>
                              </div>
                              <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                                   <Link className=" bgColor flex items-center text-2xl px-4 py-2  gap-3  w-full  font-medium capitalize text-white" href={'/dashboard/wishlist'}>   <AiOutlineHeart size={24}></AiOutlineHeart> My wishlist   </Link>
                              </div>
                              <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                                   <Link className=" bgColor flex items-center text-2xl px-4 py-2  gap-3  w-full  font-medium capitalize text-white" href={'/dashboard/massage'}>   <AiOutlineMail size={24}></AiOutlineMail> My Massage   </Link>
                              </div>
                              <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                                   <Link className=" bgColor flex items-center text-2xl px-4 py-2  gap-3  w-full  font-medium capitalize text-white" href={'/dashboard/subscribe'}>   <MdSubscriptions size={24}></MdSubscriptions>Subscribe Newsletter </Link>
                              </div>
                         </div>



                         <div className=" w-full my-5">

                              {
                                   children
                              }
                         </div>
                    </div>
               </GlobalState>
          </Container >
     );
};

export default layout;