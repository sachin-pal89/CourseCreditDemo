var mongoose= require("mongoose")
const connecttodb= async ()=>{
    mongoose.set("strictQuery", false);
    const conn= await mongoose.connect(process.env.MONGO_URI)
console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}   


module.exports=connecttodb