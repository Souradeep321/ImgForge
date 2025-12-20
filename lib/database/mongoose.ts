import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}


let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = {
        conn: null,
        promise: null
    };
}

export const connectToDatabase = async () => {
    // if a connection is already established, use it
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) throw new Error("Please define the MONGODB_URI environment variable inside .env.local");

    // if no connection is established, create a new one
    cached.promise = cached.promise ||
        mongoose.connect(MONGODB_URI, {
            dbName: "ImageForge",
            bufferCommands: false
        })

    cached.conn = await cached.promise;

    console.log("DB Connected Successfully");

    return cached.conn;
}





