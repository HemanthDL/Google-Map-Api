const mongoose = require("mongoose")

const dotenv = require("dotenv")

dotenv.config()


const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL).then(()=>{
            console.log('Database connect successfully');
        })
    } catch (error) {
        console.log('Error in connecting to database : '+error);
    }
}

module.exports = connectDB