

import connectToDB from "@/database";
import User from "@/models/users/User";
import { NextResponse } from "next/server";



export const dynamic = "farce-dynamic";

export async function GET(req) {

     try {
          await connectToDB();
          const { searchParams } = new URL(req.url);
          const email = searchParams.get("email");
          if (!email) {
               return NextResponse.json({
                    success: false,
                    message: "Product ID is required",
               })
          }
          const FindEmail = await User.findOne({ email });

          if (FindEmail) {
               return NextResponse.json({
                    success: true,
                    data: FindEmail
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
               message: " Product delete successfully"
          })
     }

}