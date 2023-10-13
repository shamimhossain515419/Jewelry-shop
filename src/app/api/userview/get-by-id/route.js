


import connectToDB from "@/database";
import cartProduct from "@/models/cartProduct";
import { NextResponse } from "next/server";
export const dynamic = "farce-dynamic";

export async function GET(req) {
     await connectToDB();


     try {


          const { searchParams } = new URL(req.url);
          const id = searchParams.get("id");
          if (!id) {
               return NextResponse.json({
                    success: false,
                    message: "Product ID is required",
               })
          }

          const data = await cartProduct.findById(id);
          console.log(data);
          if (data) {
               return NextResponse.json({
                    success: true,
                    data: data
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Failed  Get product the product ! Please try again",
               });
          }
     }

     catch (error) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          })
     }
}