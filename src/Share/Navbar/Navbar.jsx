'use client'
import Container from "@/Components/Container/Container";
import Menubar from "./Menubar";
import { AiOutlineLogout, AiOutlineClose } from 'react-icons/ai'
import { FaBars } from "react-icons/fa"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

 import  Logo  from '../../../public/Black Gold White Luxury Royal Crown Logo (1).png'
const Navbar = () => {
     const user = null;
     const [Open, setOpen] = useState(false)
     const [openModal, setOpenModal] = useState(false);


     const heandleLogout = () => {
          console.log('shad');
     }
     return (
          <div>
               <nav className='px-2 w-full fixed py-3 z-50 bg-white      top-0  left-0 right-0    shadow-lg'>
                    <Container>
                         <div className=' '>
                              <div className=' flex justify-between items-center'>
                                   <div className=' flex  items-center gap-4'>
                                        <Image src={Logo} className=' h-12 w-12 hidden md:block ' alt="" />
                                        <Link href={'/dashboard'}>  <Image className=" h-12 w-12 md:hidden rounded-full object-cover" src={user?.photoURL} alt="" /></Link>
                                        <Link href="/"> <h1 className='  py-2 font-semibold  text-base md:text-2xl text-color   uppercase'> Jewelry Shop </h1></Link>
                                   </div>
                                   <div className=' hidden md:flex items-center gap-3  space-x-5'>


                                        <Link href={'/'}> Home</Link>
                                        <Link href={'/alljewelry'}> All jewelry</Link>
                                        <Link href={'/myjewelry'}>My Jewelry</Link>
                                        <Link href={'/addjewelry'}> Add jewelry</Link>
                                        <Link href={'/blogs'}> Blogs</Link>
                                        <Link href={'/contact'}> Contact Us</Link>
                                        <div>
                                             {
                                                  user ? <div className=' cursor-pointer hidden md:block '>
                                                       <div className='   relative flex gap-2 items-center '>
                                                            <Image className=' relative h-10 w-10 rounded-full object-cover' src={user?.photoURL} alt="" />
                                                            <div className=' absolute w-3 h-3  left-8 -top-1  bg-[rgb(1,179,31)] rounded-full '></div>
                                                            <div className=' relative  space-y-0'>
                                                                 <h1 className='relative  text-base'>{user?.displayName}</h1>
                                                                 <span className=' absolute -bottom-3 text-xs mt-4'> Active now</span>
                                                            </div>

                                                       </div>
                                                  </div> : <Link href={'/login'} className={'text-[#298742]'}> Login/Register</Link>
                                             }
                                        </div>

                                   </div>

                                   <div className={`bg-[#298742c2]  text-white   ${openModal ? "transform translate-x-0" : "transform translate-x-full"}  duration-300 sm:w-[250px]  h-screen p-4 rounded-lg shadow-lg   absolute top-0  right-1`}>
                                        <div className=' flex flex-col gap-4 mt-4  '>
                                             <Link onClick={() => setOpenModal(false)} href={'/dashboard'} className={"text-xl hover:text-black duration-150  font-medium"}> Dashboard</Link>
                                             <Link onClick={() => setOpenModal(false)} href={'/dashboard/account'} className={"text-xl   hover:text-black duration-150   font-medium"}>profile</Link>
                                             <div onClick={heandleLogout} className=' flex items-center gap-2  cursor-pointer  hover:text-black duration-150  text-xl  font-medium'>  <AiOutlineLogout size={20}></AiOutlineLogout>  <span>Logout</span>  </div>
                                        </div>
                                        <AiOutlineClose onClick={() => setOpenModal(false)} size={24} className={" cursor-pointer absolute top-2 right-1 "}></AiOutlineClose>
                                   </div>



                                   <div onClick={() => setOpen(!Open)} className=' md:hidden '>

                                        {
                                             Open ? <FaBars size={24} className=' '> </FaBars> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                             </svg>

                                        }

                                   </div>
                              </div>

                              <div className='md:hidden'>
                                   {
                                        Open ? "" : <Menubar setOpen={setOpen}></Menubar>
                                   }
                              </div>


                         </div>
                    </Container>

               </nav>
          </div>
     );
};

export default Navbar;