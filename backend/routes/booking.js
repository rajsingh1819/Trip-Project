const express = require("express");
const router = express.Router();
const { createBooking, getAllBooking, getSingleBooking } = require("../controllers/bookingController");
router.post("/postBooking", createBooking);
router.get("/getBoking", getAllBooking);
router.get("/singleBoking", getSingleBooking);


module.exports = router;