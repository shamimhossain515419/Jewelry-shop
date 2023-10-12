'use client'
import Container from '@/Components/Container/Container';
import Image from 'next/image';
import React, { useContext, useState } from 'react';


const initialFormData = {
     name: "",
     price: "",
     description: "",
     image: "",
     feedback: [],
     brands: "",
     color: "",
     rating: "",
     priceDrop: "",
     category: "",
     email: ""
}

import bannerImage from '../../../public/istockphoto-155013169-612x612.jpg'
import CommonTitle from '@/Components/CommonTitle/CommonTitle';
import CommonLoader from '@/Components/CommonCart/CommonLoader/CommonLoader';
import { GlobalContext } from '@/Contaxt';
import { PostAllProduct } from '@/services/product';
import Notification from '@/Components/Notifications/Notifiacations';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
const AddJewelry = () => {
     const [formData, setFormData] = useState(initialFormData);
     const { user, pageLoader, setPageLoader } = useContext(GlobalContext);
     const [imagePar, setImage] = useState("");

     const router = useRouter();

     const handleimage = (event) => {
          const selectedImage = event.target.files[0];
          setPageLoader(true)
          const Imagebb_URL = `https://api.imgbb.com/1/upload?key=a96f8c750e4b794949a134bfefab6049`
          const ImageData = new FormData();
          ImageData.append('image', selectedImage);
          fetch(Imagebb_URL, {
               method: "POST",
               body: ImageData
          }).then(res => res.json()).then(data => {
               if (data?.data?.display_url) {
                    setFormData({
                         ...formData,
                         image: data?.data?.display_url,
                         email: user?.email
                    })
                    setPageLoader(false);
                    setImage(true)
               }
          })
     }
     console.log(formData);
     const handleSubmit = async (e) => {
          e.preventDefault();
          const result = await PostAllProduct(formData);
          if (result) {
               toast.success("successfully product add")
               router.push('/')
          }
     }




     return (
          <div>

               <Container>
                    <div>
                         <div className=' my-10'>
                              <Image src={bannerImage} className=' w-full h-[60vh] object-fill ' alt=''></Image>
                         </div>


                         <div className=' shadow-2xl p-4 rounded-2xl my-16'>
                              <div className=' mb-10'>
                                   <CommonTitle title={" add new product"} pra={"Jewelry Shop "}></CommonTitle>
                              </div>
                              <form onSubmit={handleSubmit}>
                                   <div className='  space-y-2'>
                                        <input onChange={(e) => setFormData({
                                             ...formData,
                                             name: e.target.value,
                                        })} type="text" label="name" 
                                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                        placeholder='Product Name'
                                        size="lg"
                                        />
                                        <input onChange={(e) => setFormData({
                                             ...formData,
                                             price: e.target.value,
                                        })} type="number" label="price"   className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                        placeholder='Product Price' size="lg"
                                        />
                                        <input onChange={(e) => setFormData({
                                             ...formData,
                                             description: e.target.value,
                                        })} type="text" label="description"   className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                        placeholder='Description' size="lg"
                                        />
                                        <input onChange={(e) => setFormData({
                                             ...formData,
                                             brands: e.target.value,
                                        })} type="text" label="brands"   className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                        placeholder='Brands name' size="lg"
                                        />
                                        <input onChange={(e) => setFormData({
                                             ...formData,
                                             color: e.target.value,
                                        })} type="text" label="color"   className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                        placeholder='Product Color' size="lg"
                                        />
                                       
                                        <input onChange={(e) => setFormData({
                                             ...formData,
                                             rating: e.target.value,
                                        })} type="number" label="rating"   className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                        placeholder='Rating' size="lg"
                                        />
                                        <input onChange={(e) => setFormData({
                                             ...formData,
                                             priceDrop: e.target.value,
                                        })} type="number" label="priceDrop"   className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                        placeholder='priceDrop ' size="lg"
                                        />
                                        <input onChange={(e) => setFormData({
                                             ...formData,
                                             category: e.target.value,
                                        })} type="text" label="category"   className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                                        placeholder='Category' size="lg"
                                        />

                                   </div>

                                   <div className=' my-2'>
                                        {imagePar == true ? <p className=' text-xl font-normal text-blue-500'> upload image successful </p> : <>

                                             {pageLoader ? <CommonLoader></CommonLoader>
                                                  : <input onChange={handleimage}
                                                       type="file"
                                                       label="Photo url"
                                                       className="mb-6"
                                                       size="lg"
                                                  />
                                             }
                                        </>}
                                   </div>
                                   <button type='submit' className='  block w-full cursor-pointer text-base md:text-2xl uppercase bgColor text-white px-3 text-center py-1 '>
                                        Add new product
                                   </button>
                              </form>
                         </div>

                    </div>

                    <Notification></Notification>

               </Container>

          </div>
     );
};

export default AddJewelry;

