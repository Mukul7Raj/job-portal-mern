import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

import jwt from "jsonwebtoken";

export const dbConnection = () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI environment variable is not set");
  }

  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
      retryWrites: true,
      w: "majority",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      throw new Error(`Failed to connect to database: ${err}`);
    });
};

export const sendToken = (user, statusCode, res) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is not set");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(statusCode).json({ token });
};