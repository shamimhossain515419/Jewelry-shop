
import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Product from "@/models/product";
import User from "@/models/users/User";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
     await connectToDB();
     const { name, price, email, category, priceDrop, rating, brands, color, feedback, image, description } = await req.json();


     try {

          const isAuthUser = await AuthUser(req);
          if (isAuthUser) {
               const isUserAlreadyExists = await User.findOne({ email });
               if (!isUserAlreadyExists) {
                    return NextResponse.json({
                         success: false,
                         message: "Email not Match.",
                    });
               } else {

                    const newlyCreatedUser = await Product.create({
                         name, price, email, category, priceDrop, rating, brands, color, feedback, image, description
                    });

                    if (newlyCreatedUser) {
                         return NextResponse.json({
                              success: true,
                              message: "Account created successfully.",
                         });
                    }
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
