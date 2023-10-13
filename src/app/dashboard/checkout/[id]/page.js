'use client'

import CommonCheckOut from "@/Components/CommonCheckOut";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PaymentPage = () => {
     const params = useParams();
     const [item, setItem] = useState({});
     useEffect(() => {
          fetch(`http://localhost:3000/api/userview/get-by-id?id=${params?.id}`, {
               method: "GET",
           }).then(res => res.json()).then(data => {
               setItem(data?.data)
          })

     }, [params?.id]);

    

     return (
          <div>
               <CommonCheckOut  item={item}></CommonCheckOut>
          </div>
     );
};

export default PaymentPage;