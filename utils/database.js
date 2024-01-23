import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('connected to database');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'AI_prompts',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log('successfully connected to the database');
    } catch (error) {
        console.log(error)
    }

};