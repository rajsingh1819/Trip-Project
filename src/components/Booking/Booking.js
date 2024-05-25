import React, { useEffect, useState } from "react";
import "./booking.css";
import { Form, FormGroup, Button, ListGroup, ListGroupItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
import TokenDecode from "../../utils/TokenDecode";
import axios from "axios";

function Booking({ tour, avgRating, title }) {
  const navigation = useNavigate();
  const { user } = TokenDecode();
  const { price, reviews } = tour;
  const [booking, setBooking] = useState({
    userId: user?._id,
    userEmail: user?.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    booKAt: "",
  });

  useEffect(() => {
    // Update the state when the user information is available
    setBooking((prev) => ({
      ...prev,
      userId: user?._id,
      userEmail: user?.email,
    }));
  }, [user]);

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    booking.guestSize == 0
      ? Number(price) + Number(serviceFee)
      : Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handleClick = async (e) => {
    e.preventDefault();
    // console.log(booking);

    if (!localStorage.getItem("autoToken")) {
      alert("User not login !!!");
      navigation("/login");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/booking/postBooking",
          booking
        );
        alert("Booking Successfully !!!");
        navigation("/thank-you");
      } catch (error) {
        alert("Something went wrong");
        console.error(error);
      }
    }
  };

  return (
    <div className="booking">
      <div className="booking_top">
        <h3>
          ${price} <span>/per person</span>{" "}
        </h3>
        <span className="tour_rating">
          <i className="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews.length})
        </span>
      </div>
      {/* booking form */}
      <div className="booking_form">
        <h5>Information</h5>
        <Form className="booking-info-form">
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="group_Form_3 ">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* booking end  */}

      {/* booking bottom */}
      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="List_price">
              ${price}
              <i className="ri-close-line"></i>1 person{" "}
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge </h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total </h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button
          className="btn  w-100 mt-4"
          color="warning"
          onClick={handleClick}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default Booking;
