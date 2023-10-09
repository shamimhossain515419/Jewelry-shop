
import cartProduct from "@/models/cartProduct";
import { NextResponse } from "next/server";



export const dynamic = "farce-dynamic";

export async function GET(req) {

     console.log("shamim");




     try {

          const { searchParams } = new URL(req.url);
          const email = searchParams.get("email");
          console.log(email);


          if (!email) {
               return NextResponse.json({
                    success: false,
                    message: "Product ID is required",
               })
          }
          const cart_email_product = await cartProduct.find({ email });

          if (cart_email_product) {
               return NextResponse.json({
                    success: true,
                    data: cart_email_product
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Failed  Get product the product ! Please try again",
               });
          }


     } catch (error) {
          return NextResponse.json({
               success: false,
               message: "Product delete successfully",
          })
     }


     

}