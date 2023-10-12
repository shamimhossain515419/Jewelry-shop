'use client'
import Container from "@/Components/Container/Container";
import Menubar from "./Menubar";
import { AiOutlineLogout, AiOutlineClose, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaBars } from "react-icons/fa"
import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../public/Black Gold White Luxury Royal Crown Logo (1).png'
import { GlobalContext } from "@/Contaxt";
import Notification from "@/Components/Notifications/Notifiacations";
import SidBarCar from "@/Components/SidbarCart/idnex";
const Navbar = () => {
     const { user, LogOut, userinfo, cartData, openModal, setOpenModal } = useContext(GlobalContext)
     const [Open, setOpen] = useState(true)

     const [isAdmin, setIsAdmin] = useState(false);

     return (
          <div>
               <nav className='px-2 w-full fixed py-3 z-50 bg-white      top-0  left-0 right-0    shadow-lg'>
                    <Container>
                         <div className=' '>
                              <div className=' flex justify-between items-center'>
                                   <div className=' flex  items-center gap-4'>
                                        <Image src={Logo} className=' h-12 w-12 hidden md:block ' alt="" />
                                        <Link href={'/'}>  <Image width={60} height={60} className=" h-12 w-12 md:hidden rounded-full object-cover" src={user?.photoURL} alt="image" /></Link>
                                        <Link href="/"> <h1 className='  py-2 font-semibold  text-base md:text-2xl text-color   uppercase'> Jewelry Shop </h1></Link>
                                   </div>
                                   <div className=' hidden md:flex items-center gap-3  space-x-5'>
                                        {
                                             userinfo?.role == "Admin" ? (isAdmin == true ? <>
                                                  <Link href={'/'}> Home</Link>
                                                  <Link href={'/all-product'}> All jewelry</Link>
                                                  <Link href={'/myjewelry'}>My Jewelry</Link>
                                                  <Link href={'/addjewelry'}> Add jewelry</Link>

                                                  <Link href={'/blogs'}> Blogs</Link>
                                                  <Link href={'/contact'}> Contact Us</Link>
                                                  <button onClick={() => setIsAdmin(false)} className=" bgColor text-white  px-3 py-1 ">Admin view</button>
                                             </> : <>
                                                  <Link href={'/'}> Home</Link>
                                                  <Link href={'/all-product'}> All jewelry</Link>
                                                  <Link href={'/blogs'}> Blogs</Link>
                                                  <Link href={'/contact'}> Contact Us</Link>
                                                  {
                                                       user?.email ? <Link href={'/dashboard'}>Dashboard</Link> : null
                                                  }
                                                  <div>
                                                       <AiOutlineHeart size={24}></AiOutlineHeart>
                                                  </div>
                                                  <div className=" relative">
                                                       <AiOutlineShoppingCart className=" relative" size={24}></AiOutlineShoppingCart>
                                                  </div>
                                                  <button onClick={() => setIsAdmin(true)} className=" bgColor text-white  px-3 py-1 ">Client view</button>

                                             </>) : (<>

                                                  <Link href={'/'}> Home</Link>
                                                  <Link href={'/all-product'}> All jewelry</Link>
                                                  <Link href={'/blogs'}> Blogs</Link>
                                                  <Link href={'/contact'}> Contact Us</Link>
                                                  {
                                                       user?.email ? <Link href={'/dashboard'}>Dashboard</Link> : null
                                                  }
                                                  <div>
                                                       <AiOutlineHeart size={24}></AiOutlineHeart>
                                                  </div>
                                                  <Link href={'/dashboard/checkout'} className=" relative">
                                                       <AiOutlineShoppingCart className=" relative" size={24}></AiOutlineShoppingCart>
                                                       <div className=' absolute   text-center px-[2px]  text-sm text-white bg-red-600  left-7  -top-2    rounded-full '> {cartData?.length >= 1 ? cartData?.length : 0} </div>
                                                  </Link>
                                             </>)


                                        }

                                        <div>
                                             {
                                                  user ? <div onClick={() => setOpenModal(true)} className=' cursor-pointer hidden md:block '>
                                                       <div className='   relative flex gap-2 items-center '>
                                                            <Image width={60} height={60} className=' relative h-10 w-10 rounded-full object-cover' src={user?.photoURL} alt="image" />
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

                                   <div className={`bgColor  text-white   ${openModal ? "transform translate-x-0" : "transform translate-x-full"}  duration-300 sm:w-[350px]  h-screen p-4 rounded-lg shadow-lg   absolute top-0  right-1`}>
                                        <SidBarCar openModal={openModal} setOpenModal={setOpenModal}></SidBarCar>
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
               <Notification></Notification>
          </div >
     );
};

export default Navbar;