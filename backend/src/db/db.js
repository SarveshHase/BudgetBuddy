import mongoose from "mongoose";

async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URL} / ${process.env.DB_NAME}`,
            {
                writeConcern: { w: "majority" },
            },
        );
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error: ", error);
        throw error;
    }
}

export default connectDB;