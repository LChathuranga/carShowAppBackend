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
    },
    post: {
        type: String
    },
    ownerName: {
        type: String,
        required: true
    },
    carSeats: {
        type: Number
    },
    carTankSize: {
        type: Number
    },
    carColor: {
        type: String
    },
    location: {
        type: String
    }
});

const Car = mongoose.model("Car", carSchema);
export default Car;