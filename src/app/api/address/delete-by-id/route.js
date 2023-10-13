import connectToDB from "@/database";
import Address from "@/models/address/address";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function DELETE(req) {

     try {
          await connectToDB();
          const { searchParams } = new URL(req.url);
          const id = searchParams.get("id");
           console.log(id);
          const data = await Address.findByIdAndDelete(id)
          if (data) {
               return NextResponse.json({
                    success: true,
                    message: "Successfully DELETE ID",
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
