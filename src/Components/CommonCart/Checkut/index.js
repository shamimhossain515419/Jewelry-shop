'use client'

import { GlobalContext } from '@/Contaxt';
import React, { useContext } from 'react';
import CommonLoader from '../CommonLoader/CommonLoader';
import ShoppingCard from '@/Components/ShoppoingCard';
import CommonNotFound from '@/Components/CommonNotFound';

const CheckoutBox = () => {

     const { user, etCartData,
          cartData } = useContext(GlobalContext);

     return (
          <div>

               <div>
                    {
                         cartData?.length <= 0 ? <CommonNotFound path='all-product' pra={"WelCome Jewelry shop add Cart NotFound please Add to cart"} title={'Add to cart '}></CommonNotFound> : <>  {cartData?.length > 0 ? <>
                              <div className=" grid md:grid-cols-2 gap-9 ">
                                   {
                                        cartData?.map(item => <ShoppingCard card={item} key={item?._id}></ShoppingCard>)
                                   }
                              </div>


                         </> : <> <CommonLoader></CommonLoader> </>

                         }</>
                    }
               </div>

          </div>
     );
};

export default CheckoutBox;