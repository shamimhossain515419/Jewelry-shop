import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    category: String,
    priceDrop: Number,
    rating: Number,
    color: String,
    brands: String,
    feedback: Array,
    image: String,
    email: String,
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Product;
