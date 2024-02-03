const Tour = require("../models/Tour");

// create new Tour
const createTour = async (req, res) => {
    try {
        const newTour = new Tour(req.body);
        await newTour.save();
        res.status(200).json({ success: true, message: "Successfully created", data: newTour })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to create. Try again" })


    }
}

// delete
const deleteTour = async (req, res) => {

    const id = req.params.id;
    try {
        const deleteTour = await Tour.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Successfully Delete", data: deleteTour })


    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to delete." })

    }
}

// update
const updateTour = async (req, res) => {

    const id = req.params.id;
    try {
        const updateTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({ success: true, message: "Successfully updated", data: updateTour })


    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "not found" })

    }
}



// get single tour
const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id).populate("reviews");
        res.status(200).json({ success: true, message: "Successfully data is comming", data: tour })



    }
    catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: "not found" })
    }
}


// get all tours
const getAllTour = async (req, res) => {
    try {
        const tour = await Tour.find({}).populate("reviews");
        res.status(200).json({ success: true, count: tour.length, message: "Successfully data is comming", data: tour })
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: "not found" })
    }
}

// get tour by search
const getTourBySearch = async (req, res) => {
    //  'i' case senstive
    const city = new RegExp(req.query.city, "i");
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);
    try {


        const tours = await Tour.find({
            city,
            distance: { $gte: distance },
            maxGroupSize: { $gte: maxGroupSize }
        }).populate("reviews");
        res.status(200).json({ success: true, message: " Successful", data: tours })

    }


    catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: "not found" })
    }

}



const getFeaturedTour = async (req, res) => {

    try {
        const tours = await Tour.find({ featured: true }).populate("reviews").limit(8);
        res.status(200).json({ success: true, count: tours.length, message: "Successful", data: tours })
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: "not found" })
    }
}

const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({ success: true, data: tourCount })

    }
    catch (error) {
        console.log(error);
        res.status(404).json({ success: false, message: "failed to fetch" })
    }

}


module.exports = {
    createTour, deleteTour, updateTour,
    getSingleTour, getAllTour, getTourBySearch,
    getFeaturedTour,
    getTourCount

}