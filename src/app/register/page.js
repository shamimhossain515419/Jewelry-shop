'use client'
import CommonLoader from '@/Components/CommonCart/CommonLoader/CommonLoader';
import Container from '@/Components/Container/Container';
import Notification from '@/Components/Notifications/Notifiacations';
import { GlobalContext } from '@/Contaxt';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { TEInput, TERipple } from 'tw-elements-react';
import { toast } from 'react-toastify';
import { registerNewUser } from '@/services/Register';
import { useRouter } from 'next/navigation';
const initialFormData = {
     name: "",
     email: "",
     password: "",
     confirmPassword: "",
     photo: "",
     role: ""

};


const RegisterPage = () => {
     const { pageLoader, setPageLoader, GoogleLogin, Error, updateUserProfile, setError, createUser } = useContext(GlobalContext)
     const router = useRouter()
     const [formData, setFormData] = useState(initialFormData);
     const [image, setImage] = useState(false);
     console.log(formData);

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
                         photo: data?.data?.display_url,
                    })
                    setPageLoader(false);
                    setImage(true)
               }
          })
     }



     const selectUser = { email: formData?.email, password: formData?.password, name: formData?.name, photo: formData?.photo, role: formData?.role }

     const handleGoogle = async () => {
          const result = await GoogleLogin();
          const currentUser = result?.user;
          if (currentUser) {

               const data = { email: currentUser?.email, password: currentUser?.password, name: currentUser?.displayName, photo: currentUser?.photoURL, role: "user" }

               const postData = await registerNewUser(data);
               if (postData) {
                    toast.success('Successfully Register!')
                    router.push('/')
               }

          }
     }

     const handleSubmit = async (e) => {
          e.preventDefault();
          if (formData?.password == formData?.confirmPassword) {
               setError(false);


               const result = await createUser(formData?.email, formData?.password);
               const profile = await updateUserProfile(formData?.name, formData?.photo)
               const postData = await registerNewUser(selectUser);
               if (result.user) {
                    router.push('/')
                    toast.success('Successfully Register!')
               }
          } else {
               setError(true)
          }


     }

     return (
          <div>
               <Container>


                    <section className="mt-10">
                         <div className="container h-full px-6 py-24">
                              <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                                   {/* <!-- Left column container with background--> */}
                                   <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                                        <Image width={500} height={400}
                                             src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                             className="w-full"
                                             alt="Phone image"
                                        />
                                   </div>

                                   {/* <!-- Right column container with form --> */}
                                   <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                                        <form onSubmit={handleSubmit}>
                                             {/* <!-- Email input --> */}
                                             <TEInput
                                                  onChange={(e) => setFormData({
                                                       ...formData,
                                                       name: e.target.value,
                                                  })}
                                                  type="text"
                                                  label="Enter your name"
                                                  size="lg"
                                                  className="mb-6"
                                             ></TEInput>
                                             <TEInput
                                                  onChange={(e) => setFormData({
                                                       ...formData,
                                                       email: e.target.value,
                                                  })}
                                                  type="email"
                                                  label="Email address"
                                                  size="lg"
                                                  className="mb-6"
                                             ></TEInput>

                                             {/* <!--Password input--> */}
                                             <TEInput
                                                  onChange={(e) => setFormData({
                                                       ...formData,
                                                       password: e.target.value,
                                                  })}
                                                  type="password"
                                                  label="Password"
                                                  className="mb-6"
                                                  size="lg"
                                             ></TEInput>
                                             <TEInput
                                                  onChange={(e) => setFormData({
                                                       ...formData,
                                                       confirmPassword: e.target.value,
                                                  })}
                                                  type="password"
                                                  label="confirm password"
                                                  className="mb-6"
                                                  size="lg"
                                             ></TEInput>

                                             <div className=' my-2 py-2'>
                                                  <select className=' border-2 border-blue-400 outline-1 w-full px-3 py-2 rounded-lg text-xl ' onChange={(e) => setFormData({
                                                       ...formData,
                                                       role: e.target.value,
                                                  })} data-te-select-init>
                                                       <option value="user">User</option>
                                                       <option value="Admin">Admin</option>

                                                  </select>
                                             </div>

                                             <div>
                                                  {image == true ? <p className=' text-xl font-normal text-blue-500'> upload image successful </p> : <>

                                                       {pageLoader ? <CommonLoader></CommonLoader>
                                                            : <input onChange={handleimage}
                                                                 type="file"
                                                                 label="Photo url"
                                                                 className="mb-6"
                                                                 size="lg"
                                                            ></input>
                                                       }
                                                  </>}
                                             </div>

                                             {
                                                  Error ? <p className=' text-red-400 font-normal'>Password not match</p> : null
                                             }


                                             {/* <!-- Remember me checkbox --> */}
                                             <div className="mb-6 flex items-center justify-between">
                                                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                                       <input
                                                            className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                                            type="checkbox"
                                                            value=""
                                                            id="exampleCheck3"
                                                            defaultChecked
                                                       />
                                                       <label
                                                            className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                                            htmlFor="exampleCheck3"
                                                       >
                                                            Remember me
                                                       </label>
                                                  </div>

                                                  {/* <!-- Forgot password link --> */}
                                                  <a
                                                       href="#!"
                                                       className="textColor transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                                  >
                                                       Terms and conditions
                                                  </a>
                                             </div>

                                             {/* <!-- Submit button --> */}

                                             <TERipple rippleColor="light" className="w-full">
                                                  <button
                                                       type="submit"
                                                       className="inline-block w-full rounded bgColor px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                                  >
                                                       Register now
                                                  </button>
                                             </TERipple>

                                             {/* <!-- Divider --> */}
                                             <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                                  <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                                       OR
                                                  </p>
                                             </div>

                                             {/* <!-- Social login buttons --> */}
                                             <TERipple rippleColor="light" className="w-full">
                                                  <a
                                                       className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                                       style={{ backgroundColor: "#3b5998" }}
                                                       href="#!"
                                                       role="button"
                                                  >
                                                       {/* <!-- Facebook --> */}
                                                       <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="mr-2 h-3.5 w-3.5"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                       >
                                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                                       </svg>
                                                       <p className=' text-sm md:text-base'>   Continue with Facebook</p>
                                                  </a>
                                             </TERipple>
                                             <TERipple rippleColor="light" className="w-full">
                                                  <a onClick={handleGoogle}
                                                       className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                                                       style={{ backgroundColor: "#55acee" }}
                                                       href="#!"
                                                       role="button"
                                                  >
                                                       {/* <!-- Twitter --> */}
                                                       <svg className=' w-[25 px] h-[25px] px-2' viewBox="0 0 20 20" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"></path><path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"></path><path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"></path><path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"></path></svg>
                                                       Continue with Google
                                                  </a>
                                             </TERipple>

                                        </form>
                                        <div>
                                             <div className=' flex items-center justify-center gap-2 '>
                                                  <p className=' text-base  font-normal  uppercase '> Jewelry Shop</p>
                                                  <Link className='  uppercase text-base text-blue-400 ' href={'/login'}>Login </Link>
                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>
                    </section>


               </Container>


               <Notification></Notification>
          </div>
     );
};

export default RegisterPage;