require("dotenv").config();

const productSchema = require("./models/product");

const connectDB = require("./DB/connect");

const productJson = require("./product.json");

const start = async () => {
  try {
    await connectDB();
    await productSchema.deleteMany();
    await productSchema.create(productJson);
    console.log("succesfully submitted");
  } catch (error) {
    console.log(error);
  }
}




start();