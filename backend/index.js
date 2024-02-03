const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser")
const tourRoute = require("./routes/tour.js");
const userRoute = require("./routes/user.js");
const reviewsRoute = require("./routes/reviews.js");
const bookingRoute = require("./routes/booking.js");
dotenv.config();

const PORT = process.env.PORT || 5000;
const DB = process.env.MONGO_URL;


app.get("/", (r, re) => {
    re.send("Hello")

})
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB ");
}).catch((error) => {
    console.log("Error connection to MongoDB", err)
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);

})


// middeleware

app.use(cors());
app.use(express.json());
app.use('/tours', tourRoute);
app.use('/users', userRoute);
app.use("/reviews", reviewsRoute);
app.use("/booking", bookingRoute);

