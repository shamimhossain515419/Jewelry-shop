"use client"
import Image from 'next/image';
import './HomeBanner.css'
import backgroundImageUrl from '../../../../public/slideshow1-1.jpg';
import Link from 'next/link';
export default function HomeBanner() {


     // Replace with your image URL


     return (
          <>
               <div className=' relative overflow-hidden   md:h-[70vh]'>
                    <div className=' h-[400px] relative  w-full  md:h-[70vh]'>
                         <Image className=' w-full h-full relative    object-cover md:object-fill ' src={backgroundImageUrl} alt=''></Image>

                         <div className=' absolute w-full h-full    top-1 md:top-1/4 left-1  md:left-[15%] '>
                              <h1  data-aos="fade-up" className=' text-xl  md:text-4xl  font-extrabold my-2 capitalize    leading-9   '> Family Jewelery <br />  Collection   </h1>
                              <p className=' text-base  md:text-2xl font-medium pt-2 '>  Designer Jewelry Necklaces-BraceIets-Earings</p>

                             <div className=' mt-10'>
                             <Link href={'/'} className='  px-2 py-1 md:px-4 md:py-3  rounded-xl bgColor text-white '>  READ MORE</Link>
                             </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
