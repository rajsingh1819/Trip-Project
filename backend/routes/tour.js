const express = require("express");
const { createTour, deleteTour, updateTour, getSingleTour,
    getAllTour, getTourBySearch, getFeaturedTour, getTourCount } = require("../controllers/tourController.js");
const router = express.Router();
// create new route
router.post("/post", createTour);
router.delete('/delete/:id', deleteTour)
router.put('/update/:id', updateTour)
router.get('/allTour', getAllTour)
router.get('/getSigleTour/:id', getSingleTour)
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTour", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);





module.exports = router;