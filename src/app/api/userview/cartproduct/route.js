

import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import cartProduct from "@/models/cartProduct";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
     await connectToDB();
     const { name, price, email, image, productId, priceDrop } = await req.json();

     try {

          const isAuthUser = await AuthUser(req);
          if (isAuthUser) {

               const newlyCreatedUser = await cartProduct.create({
                    name, price, email, image, productId, priceDrop
               });

               if (newlyCreatedUser) {
                    return NextResponse.json({
                         success: true,
                         message: "Account created successfully.",
                    });
               }

          } else {
               return NextResponse.json({
                    success: false,
                    message: "You are not authenticated",
               });
          }



     } catch (error) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
