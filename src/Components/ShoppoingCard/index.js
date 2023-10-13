'use client'
import { BsTrash } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { cartDeleteById } from "@/services/product";
import { useRouter } from "next/navigation";
const ShoppingCard = ({ card }) => {
     const handleDelete = async (id) => {
          const data = await cartDeleteById(id);
          if (data.success == true) {
               toast.success(data?.message)
               window.location.reload();
          }


     }
     console.log(card?._id);
     const router = useRouter();
     return (
          <div>
               <div className=" my-2 shadowbox p-2  rounded-md " >

                    <div className=" flex gap-8   ">
                         <Image width={150} height={250} className=" w-[150px] rounded" src={card?.image} alt="" />
                         <div>
                              <h1 className=" uppercase text-xl font-semibold "> {card?.name} </h1>
                              <h1 className="text-base   font-medium"> Price: ${card?.price} </h1>
                              <h1 className="text-base    font-medium"> Discount : {card?.priceDrop ? card?.priceDrop : "00"}%  </h1>
                              <h1 className="text-base    font-medium"> Delivery : {60}</h1>
                              <h1 className="text-base    font-medium"> Quantity : </h1>
                         </div>

                         <div className=" ">
                              <div onClick={() => handleDelete(card?._id)} className=" my-5 bg-[#ff26cc36] text-center cursor-pointer bgColor text-white  rounded py-2 px-4 text-base md:text-xl font-normal">
                                   <BsTrash className=" text-center inline-block text-red-500" size={24}></BsTrash>
                              </div>
                              <Link  href={`/dashboard/checkout/${card?._id}`} className=" uppercase bgColor my-5 text-white  text-center rounded py-2 px-4 cursor-pointer text-base md:text-xl font-normal">
                                   checkout
                              </Link>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default ShoppingCard;