import mongoose from "mongoose"
export async function connectDB() {
    try {
      const connection= await mongoose.connect(process.env.MONGO_URI) 
      console.log("DB connected successfully")
    } catch (error) {
        console.log("Db failed to connect")
        throw new Error(error)
    }
}