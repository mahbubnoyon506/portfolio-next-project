const MONGO_URI = "mongodb+srv://portfolio-user:6*SdY-8Z7$ZNu62@cluster0.wiiz8tg.mongodb.net/?retryWrites=true&w=majority"

import mongoose from "mongoose";

const connectMongo = async () => {
  try{
   const {connection} =await mongoose.connect(MONGO_URI);
   if(connection.readyState == 1){
    console.log('Database connected')
   }
  }catch(errors){
   return Promise.reject(errors)
  }
}

export default connectMongo;
