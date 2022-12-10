import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js"
const app = express();
dotenv.config();

const connect = async () => {
  try {
     mongoose.connect(process.env.MONGO,function (response) {
        console.log("Connected to mongoDB.");       
     });
 
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
  // addAll();
});

//middlewares
app.use(cors())
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/user",userRouter)
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(5000, () => {
  connect();

  console.log("App Runnino on PORT 5000" );
});
