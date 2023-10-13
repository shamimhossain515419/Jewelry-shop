
'use client'
import ComponentLevelLoader from "@/Components/CommonLevelLoader";
import { GlobalContext } from "@/Contaxt";
import { AddressPost, Address_delete_by_id } from "@/services/address";

import { useContext, useState } from "react";


const SettingPage = () => {
     const { user, address, componentLevelLoader, setComponentLevelLoader } = useContext(GlobalContext)
     const [Open, setOpen] = useState(false);

     const handlePost = async (e) => {
          e.preventDefault();
          setComponentLevelLoader({
               loading: true,
               id: ""
          })
          const form = e.target;
          const fullName = form.name.value;
          const post = form.post.value;
          const address = form.address.value;
          const phone = form.phone.value;
          const country = form.country.value;
          const postData = { fullName, post, phone, country, address, email: user?.email }
          const data = await AddressPost(postData);
          if (data) {
               setComponentLevelLoader({
                    loading: false,
                    id: ""
               })
               form.reset();
               window.location.reload();
          }

     }


     const handleDelete = async (id) => {
          console.log(id);
          const result = await Address_delete_by_id(id);
          console.log(result);
          if (result.success) {
               window.location.reload();
          }
     }
     return (
          <div>

               <div className=" my-2">
                    <h1 className=" text-xl  uppercase font-medium my-1"> {user?.displayName} </h1>
                    <h1 className=" text-xl font-medium my-1"> {user?.email} </h1>
               </div>





               <div>
                    <div className="mt-4 flex flex-col gap-4">
                         {address && address.length ? (
                              address.map((item) => (
                                   <div className="border p-6" key={item._id}>
                                        <p>Name : {item.fullName}</p>
                                        <p>Address : {item.address}</p>
                                        <p>Country : {item.country}</p>
                                        <p>Phone : {item.phone}</p>
                                        <p>post : {item.post}</p>
                                        <button

                                             className="mt-5 mr-5 inline-block bgColor text-white px-5 py-3 text-xs font-medium uppercase tracking-wide"
                                        >
                                             Update
                                        </button>
                                        <button
                                             onClick={() => handleDelete(item._id)}
                                             className="mt-5  inline-block bgColor text-white px-5 py-3 text-xs font-medium uppercase tracking-wide"
                                        >
                                             {componentLevelLoader &&
                                                  componentLevelLoader.loading &&
                                                  componentLevelLoader.id === item._id ? (
                                                  <ComponentLevelLoader
                                                       text={"Deleting"}
                                                       color={"#ffffff"}
                                                       loading={
                                                            componentLevelLoader &&
                                                            componentLevelLoader.loading
                                                       }
                                                  />
                                             ) : (
                                                  "Delete"
                                             )}
                                        </button>
                                   </div>
                              ))
                         ) : (
                              <p>No address found ! Please add a new address below</p>
                         )}
                    </div>
               </div>

               {
                    Open ? <> <div className="  boxshadow p-4 mt-5  rounded-md">
                         <form onSubmit={handlePost}>
                              <div className=" space-y-2 pt-2">
                                   <p >Full Name: </p>
                                   <input className="border placeholder-gray-400 focus:outline-none focus:border-black w-full  px-4 py-[5px] mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md" placeholder=" Full Name" type="text" name="name" id="" />
                              </div>
                              <div className=" space-y-2 pt-2">
                                   <p > Address: </p>
                                   <input className="border placeholder-gray-400 focus:outline-none focus:border-black w-full  px-4 py-[5px] mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md" placeholder=" Address" type="text" name="address" id="" />
                              </div>
                              <div className=" space-y-2 pt-2">
                                   <p >Post code: </p>
                                   <input className="border placeholder-gray-400 focus:outline-none focus:border-black w-full  px-4 py-[5px] mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md" placeholder=" Post code" type="text" name="post" id="" />
                              </div>
                              <div className=" space-y-2 pt-2">
                                   <p >Phone Number: </p>
                                   <input className="border placeholder-gray-400 focus:outline-none focus:border-black w-full  px-4 py-[5px] mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md" placeholder="phone number" type="text" name="phone" id="" />
                              </div>
                              <div className=" space-y-2 pt-2">
                                   <p > country: </p>
                                   <input className="border placeholder-gray-400 focus:outline-none focus:border-black w-full  px-4 py-[5px] mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md" placeholder="country" type="text" name="country" id="" />
                              </div>

                              <div className=" mt-5">
                                   <button type="submit"
                                        className="disabled:opacity-50 inline-flex w-full items-center justify-center bgColor px-6 py-3 text-lg 
                                    text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide "


                                   >
                                        {componentLevelLoader && componentLevelLoader.loading ? (
                                             <ComponentLevelLoader
                                                  text={"Address posting "}
                                                  color={"#ffffff"}
                                                  loading={
                                                       componentLevelLoader && componentLevelLoader.loading
                                                  }
                                             />
                                        ) : (
                                             "Post Address"
                                        )}
                                   </button>
                              </div>
                         </form>
                    </div></> : <>
                    </>
               }

               <div className=" my-7">
                    {
                         Open ? <button onClick={() => setOpen(false)} className=" text-white bgColor px-4 py-[6px] ">Hid  From </button> : <button onClick={() => setOpen(true)} className=" text-white bgColor px-4 py-[6px] ">New Address</button>
                    }
               </div>









          </div>
     );
};

export default SettingPage;