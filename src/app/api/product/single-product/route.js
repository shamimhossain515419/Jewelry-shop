
import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";


export const dynamic = "farce-dynamic";

export async function GET(req) {

 try {
          await connectToDB();
          const { searchParams } = new URL(req.url);
          const id = searchParams.get("id");
          if (!id) {
               return NextResponse.json({
                    success: false,
                    message: "Product ID is required",
               })
          }
          const deleteProduct = await Product.findById(id);

          if (deleteProduct) {
               return NextResponse.json({
                    success: true,
                    data: deleteProduct
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Failed  Get product the product ! Please try again",
               });
          }


     } catch (error) {
          return NextResponse, json({
               success: false,
               message: " Product delete successfully"
          })
     }

}