import mongoose from "mongoose";

const Connectdb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/chatapp_backend')
        console.log("database connected sucessfully")
    }
    catch (err) {
        console.log("error connecting to db", err)
    }
}
export default Connectdb;