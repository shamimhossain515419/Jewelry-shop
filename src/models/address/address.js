import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
     fullName: String,
     address: String,
     country: String,
     post: String,
     phone: String,
     email: String,
});

const Address = mongoose.models.Address || mongoose.model("Address", UserSchema);

export default Address;
