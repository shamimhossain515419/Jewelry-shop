'use client'
import Link from 'next/link';
import React from 'react';
import Container from "@/Components/Container/Container";
import GlobalState from "@/Contaxt";
import DashboardLink from '@/Components/DashboardLink';




const layout = ({ children }) => {



     return (
          <Container>

               <GlobalState>
                    <div className=" md:flex gap-8 ">
                         <DashboardLink></DashboardLink>



                         <div className=" w-full my-5">

                              {
                                   children
                              }
                         </div>
                    </div>
               </GlobalState>
          </Container >
     );
};

export default layout;