import mongoose from 'mongoose';
import { DB_MONGO_URI_DEV, DB_MONGO_URI_TEST, NODE_ENV } from "../config.js";

const DB_MONGO_URI = NODE_ENV === 'test' ? DB_MONGO_URI_TEST : DB_MONGO_URI_DEV;
// const DB_MONGO_URI = NODE_ENV === 'testSculptures' ? DB_MONGO_URI_TEST : DB_MONGO_URI_DEV;

// Función para conectar a la base de datos
const connection_db = async () => {
  try {

    await mongoose.connect(DB_MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

export default connection_db;

