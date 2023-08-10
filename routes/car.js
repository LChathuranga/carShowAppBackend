import express from 'express';
import { createCar, getAllCars } from '../controllers/car.js';

const router = express.Router();

router.post("/create", createCar);
router.get("/get-all-cars", getAllCars);

export default router;