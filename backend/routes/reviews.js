const express = require("express");
const router = express.Router();
const createReview = require("../controllers/reviewController");
router.post("/:tourId", createReview);

module.exports = router;