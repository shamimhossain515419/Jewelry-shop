'use client'

import { GlobalContext } from '@/Contaxt';
import React, { useContext } from 'react';
import CommonLoader from '../CommonLoader/CommonLoader';
import ShoppingCard from '@/Components/ShoppoingCard';

const CheckoutBox = () => {

     const { user, etCartData,
          cartData } = useContext(GlobalContext);

     return (
          <div>
               {
                    cartData?.length > 0 ? <>

                         <div className=" grid md:grid-cols-2 gap-9 ">
                              {
                                   cartData?.map(item => <ShoppingCard card={item} key={item?._id}></ShoppingCard>)
                              }
                         </div>


                    </> : <> <CommonLoader></CommonLoader> </>

               }
          </div>
     );
};

export default CheckoutBox;