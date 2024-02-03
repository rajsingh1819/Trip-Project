const Tour = require("../models/Tour.js");
const Review = require("../models/Review.js");


const createReview = async (req, res) => {
    const tourId = req.params.tourId;
    const { username, reviewText, rating } = req.body;
    const newReview = new Review({ username, reviewText, rating })

    try {
        const savedReview = await newReview.save();

        await Tour.findByIdAndUpdate(tourId, {
            $push: { reviews: savedReview._id }
        })

        res.status(200).json({ success: true, message: "Review Submitted", data: savedReview });


    }
    catch (error) {
        res.status(500).json({ success: false, message: "failed to Submitted" });


    }
}

module.exports = createReview;
