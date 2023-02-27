/**
 * Created by Syed Afzal
 */
import { Express } from "express";
import mongoose from "mongoose";

export const connect = (app: Express) => {
  const options = {
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
  };

  const connectWithRetry = () => {
    if (!(typeof process.env.MONGODB_URI === 'string')) {
      throw new Error("Undefined ENV URL for DB")
    }

    mongoose.Promise = global.Promise;
    console.log("MongoDB connection with retry");
    mongoose
      .connect(process.env.MONGODB_URI, options)
      .then(() => {
        console.log("MongoDB is connected");
        app.emit("ready");
      })
      .catch((err) => {
        console.log("MongoDB connection unsuccessful, retry after 2 seconds.", err);
        setTimeout(connectWithRetry, 2000);
      });
  };
  connectWithRetry();
};