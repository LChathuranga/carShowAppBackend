import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import dotEnv from 'dotenv';

import authRoutes from './routes/auth.js';
import carRoutes from './routes/car.js';

dotEnv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/car', carRoutes);

const PORT = process.env.PORT || 8001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, (() => console.log(`Server running on port ${PORT}`)));
}).catch((error) => console.log(`${error}, Did not Connected!!`));