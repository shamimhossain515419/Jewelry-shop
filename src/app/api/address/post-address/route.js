import connectToDB from "@/database";
import Address from "@/models/address/address";
import Joi from "joi";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

const AddNewAddress = Joi.object({
     fullName: Joi.string().required(),
     address: Joi.string().required(),
     country: Joi.string().required(),
     phone: Joi.string().required(),
     post: Joi.string().required(),
     email: Joi.string().required(),
});

export async function POST(req) {

     try {
          await connectToDB();
          const data = await req.json();
          const { fullName, post, address, phone, email, country } = data;



          const { error } = AddNewAddress.validate({ fullName, post, address, phone, email, country });

          if (error) {
               return NextResponse.json({
                    success: false,
                    message: error.details[0].message,
               });
          }

          const newlyAddedAddress = await Address.create(data);

          if (newlyAddedAddress) {
               return NextResponse.json({
                    success: true,
                    message: "Address added successfully",
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "failed to add an address ! Please try again later",
               });
          }



     } catch (error) {
          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
