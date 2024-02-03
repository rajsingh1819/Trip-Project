const User = require("../models/user.js");
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    console.log(req.body);  // Log received data

    const { username, email, password, photo } = req.body;

    try {
        const newUser = new User({ username, email, password, photo });
        await newUser.save();
        res.status(200).json({ success: true, message: "Successfully created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to create. Try again." });
    }
};



const crypto = require('crypto');

const createToken = (userId) => {
    const payload = {
        userId: userId

    }
    // Generate a random and secure secret key (32 bytes for HMAC SHA-256)
    const secretKey = crypto.randomBytes(32).toString('hex');
    // console.log('Generated Secret Key:', secretKey);

    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" })
    return token;

}

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(404).json({ message: "Email and Password are required !!!" })
    };

    // check for user in database

    User.findOne({ email })
        .then((user) => {
            if (!user) {
                // user not found
                return res.status(404).json({ message: "User not found" })

            }

            //   compare the provider password  with the password in database
            if (user.password !== password) {
                return res.status(404).json({ message: "Invalid password!" })
            }

            const token = createToken(user._id);
            res.status(200).json({ success: true, token: token, message: "Successfully login" })
        })
        .catch((error) => {
            console.log("Error is finding the user", error);
            res.status(500).json({ message: "Internal Server error" })

        });

}






// delete
const deleteUser = async (req, res) => {

    const id = req.params.id;
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Successfully Delete", data: deleteUser })


    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to delete." })

    }
}

// update
const updateUser = async (req, res) => {

    const id = req.params.id;
    try {
        const updateUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({ success: true, message: "Successfully updated", data: updateUser })


    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "not found" })

    }
}



// get single User
const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id)
        res.status(200).json({ success: true, message: "Successfully data is comming", data: user })



    }
    catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: "not found" })
    }
}


// get all Users
const getAllUser = async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).json({ success: true, count: user.length, message: "Successfully data is comming", data: user })
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: "not found" })
    }
}


module.exports = {
    register, login,
    deleteUser, updateUser,
    getSingleUser, getAllUser

}