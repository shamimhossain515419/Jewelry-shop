
import mongoose from "mongoose";
const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  // const connectionUrl ="mongodb+srv://jewelryshop:4GU3alZ2rOold8qk@cluster0.dvvalm2.mongodb.net/";
  const connectionUrl ="mongodb+srv://Jewelryshop123:DPryf6lXqiizyamj@cluster0.soyhs2b.mongodb.net/";
 
  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Ecommerce database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
