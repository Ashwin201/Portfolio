import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    // console.log("MongoDb Connected");
  } catch (err) {
    console.log(err);
  }
};
