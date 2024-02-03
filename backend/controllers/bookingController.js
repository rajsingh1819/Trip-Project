const Booking = require("../models/Booking.js");


const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const saveBooking = await newBooking.save();
        res.status(200).json({ success: true, message: "Your tour is booked", data: saveBooking })
    }
    catch (error) {
        res.status(500).json({ success: false, message: "internal server error" })

    }
}


//delete Booking
const deleteBooking = async (req, res) => {

    const id = req.params.id;
    try {
        const deleteBooking = await Booking.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Successfully Delete", data: deleteBooking })


    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to delete." })

    }
}

// update Booking
const updateBooking = async (req, res) => {

    const id = req.params.id;
    try {
        const updateBooking = await Booking.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({ success: true, message: "Successfully updated", data: updateBooking })


    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "not found" })

    }
}



// get single Booking
const getSingleBooking = async (req, res) => {
    const id = req.params.id;
    try {
        const singleBooking = await Booking.findById(id)
        res.status(200).json({ success: true, message: "Successfully data is coming", data: singleBooking });
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: "not found" });
    }
}

// get all Bookings
const getAllBooking = async (req, res) => {
    try {
        const allBookings = await Booking.find();
        res.status(200).json({ success: true, count: allBookings.length, message: "Successfully data is coming", data: allBookings });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "not found" });
    }
}

module.exports = { createBooking, getAllBooking, getSingleBooking };





