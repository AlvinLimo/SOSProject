import User from "../models/User.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export const registerUser = async (req, res) => {
    const user_id = uuidv4();
    const { username, email, phone_number, password, role } = req.body;

    try{
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            user_id,
            username,
            email,
            phone_number,
            password: hashedPassword,
            role,
            created_at: new Date()
        })
        res.status(201).json(user)
    }catch(err){
        console. error("Registering error", err)

        if(err.name === "SequelizeUniqueConstraintError"){
            return res.status(409).json({error: "Email or phone number already exists"})
        }

        res.status(500).json({error: "Error adding to the database"})
    }
}