import connectToDB from "@/database";
import Address from "@/models/address/address";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req) {

     try {
          await connectToDB();
          const { searchParams } = new URL(req.url);
          const email = searchParams.get("email");
          const data = await Address.find({ email: email })
          if (data) {
               return NextResponse.json({
                    success: true,
                    data: data
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Address Not Found",
               });
          }
     } catch (error) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
