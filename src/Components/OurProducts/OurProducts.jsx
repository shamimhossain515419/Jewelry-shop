import { getAllAdminProducts } from "@/services/product";
import CommonTitle from "../CommonTitle/CommonTitle";
import CommonCart from "../CommonCart/CommonCart";

const OurProducts = async () => {

     const newData = await getAllAdminProducts();
    
     return (
          <div>
               <CommonTitle title={"Our Products"} pra={"Add our products to weekly lineup"} ></CommonTitle>

                <CommonCart data={newData?.data}></CommonCart>
          </div>
     );
};

export default OurProducts;