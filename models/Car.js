import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    creatorId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    carName: {
        type: String,
        required: true
    },
    carPrice: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    carImage: {
        type: String
    }
});

const Car = mongoose.model("Car", carSchema);
export default Car;