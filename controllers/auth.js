import User from "../models/User.js";

export const registerUsers = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            const newUser = new User({
                name: name,
                email: email,
                password: password
            });
            await newUser.save();
            res.status(200).json({ message: "Successfully saved data" })
        }
        else {
            res.status(500).json({ message: "Email is already used" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const loginUsers = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            const isPasswordValid = await user.comparePassword(password);
            if (isPasswordValid) {
                res.status(200).json({ message: "Authentication Succeeded!!", user });
            } else {
                res.status(404).json({ message: "Authentication Failed!!" });
            }
        } else {
            res.status(404).json({ message: "Authentication Failed!!" });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}