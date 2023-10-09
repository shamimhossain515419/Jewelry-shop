import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
     {
          name: String,
          image: String,
          price: Number,
          priceDrop: Number,
          productId: Number,
          email: String,
     },
     { timestamps: true }
);

const cartProduct =
     mongoose.models.cartProduct || mongoose.model("cartProduct", ProductSchema);

export default cartProduct;
