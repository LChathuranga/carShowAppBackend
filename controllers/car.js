import Car from "../models/Car.js";
import mongoose from "mongoose";

export const createCar = async (req, res) => {
    const { creatorId, carName, carPrice, carModel, carImage } = req.body;
    try {
        if (mongoose.Types.ObjectId.isValid(creatorId)) {
            const newCar = new Car({
                creatorId,
                carName,
                carPrice,
                carModel,
                carImage
            });

            const createdCar = await newCar.save();
            res.status(200).json({ message: "Successfully saved data", createdCar });
        } else {
            res.status(500).json({ message: "The provided creator Id is not Valid!!" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllCars = async (req, res) => {
    try {
        const allCars = await Car.find();
        res.status(200).json({ message: "Successfully fetched data", allCars });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}