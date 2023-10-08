import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectToDB from "@/database";
export const dynamic = "force-dynamic";
export async function POST(req) {
     await connectToDB();

     try {
          const data = await req.json();
         
          const token = jwt.sign(
              { data: data?.email, id: process.env.ACCESS_TOKEN_SECRET},
               "default_secret_key",
               { expiresIn: "20d" }
          );
       
          // const token = jwt.sign(data?.email, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10d' })
          if (token) {
               return NextResponse.json({
                    success: true,
                    message:  token ,
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Authorization Something is wrong",
               });
          }


     } catch (error) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }




}