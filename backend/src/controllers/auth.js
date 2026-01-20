import User from "../model/User.js";
import bcrypt from 'bcrypt'

export async function signup (req, res) {
    try{
        const {name, email, password} = req.body
        const findUser = await User.findOne({email})
        if (findUser){
            return res.status(409).json({message: "User already exists", success: false})
        }
        const newUser = new User({name, email, password})
        newUser.password = await bcrypt.hash(password, 10)
        await newUser.save()
        res.status(201).json({message: "Signup successfull"})
    }catch(error){
        console.log(error)
        json.status(500).json({message: "Failed to register the user", success: false})
    }
}

export async function login(req, res) {
    try{

    }catch(error){

    }
}