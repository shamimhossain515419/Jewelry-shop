import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DashboardLink = () => {
     const router = usePathname();

     return (
          <div>
               <div className="  my-5">

                    <div className=" max-w-[350px] md:w-[350px]  ">
                         <Link className={`${router == "/dashboard" ? "textColor" : ""} `} href={'/dashboard'}> Dashboard Menu</Link>
                    </div>
                    <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                         <Link className={`${router == "/dashboard/checkout" ? "textColor" : ""} `} href={'/dashboard/checkout'}>    Checkout  </Link>
                    </div>
                    <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                         <Link className=" " href={'/dashboard/account-setting'}>   Account setting  </Link>
                    </div>
                    <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                         <Link className=" " href={'/dashboard/shopping'}>   Billing & Shipping Info   </Link>
                    </div>
                    <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                         <Link className=" " href={'/dashboard/payment'}>    Payment info   </Link>
                    </div>
                    <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                         <Link className=" " href={'/dashboard/history'}>    Product history  </Link>
                    </div>
                    <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                         <Link className=" " href={'/dashboard/wishlist'}>    My wishlist   </Link>
                    </div>
                    <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                         <Link className=" " href={'/dashboard/massage'}>    My Massage   </Link>
                    </div>
                    <div className=" max-w-[350px] md:w-[350px] mt-1 ">
                         <Link className=" " href={'/dashboard/subscribe'}>   Subscribe Newsletter </Link>
                    </div>
               </div>

          </div>
     );
};

export default DashboardLink;