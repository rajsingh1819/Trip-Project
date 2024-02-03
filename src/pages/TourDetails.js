import React, { useRef, useState, useEffect } from 'react'

import "./styles/tourDetails.css"
import { Row, Col, Container, Form, ListGroup } from 'reactstrap'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import avatar from "../assets/images/avatar.jpg"
import Booking from '../components/Booking/Booking'
import Newsletter from './Newsletter'
import TokenDecode from '../utils/TokenDecode'



function TourDetails() {
    const navigation = useNavigate();
    const [tour, setTour] = useState(null);
    const { id } = useParams();
    const reviewMsgRef = useRef('');
    const [tourRating, setTourRating] = useState(null);
    const { userId, user } = TokenDecode();



    const submitHandle = async (e) => {
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value;

        const data = {
            username: user.username,  // Corrected key
            reviewText,
            rating: tourRating
        };

        // console.log("data==>", data)
        if (!(localStorage.getItem("autoToken"))) {
            alert("User not login !!!");
            navigation("/login");

        } else {
            try {
                const response = await axios.post(`http://localhost:5000/reviews/${id}`, data);
                alert("Successful review");
                getdata();
            } catch (error) {
                alert("Something went wrong");
                console.error(error);
            }
        }
    }



    const getdata = () => {
        axios.get(`http://localhost:5000/tours/getSigleTour/${id}`).then((response) => {
            setTour(response.data.data);
        })
            .catch((error) => {
                console.log("error retrieving users", error);

            });
    }
    useEffect(() => {
        getdata();

    }, []);


    const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour || {};
    const { totalRating, avgRating } = calculateAvgRating(reviews);
    // data format
    const options = { day: 'numeric', month: "long", year: "numeric" }

    // server side

    return (
        <>

            <section>
                <Container>
                    {
                        tour !== null ?
                            <Row>
                                <Col lg='8'>
                                    <div className='tour_content'>
                                        <img src={photo} alt='' />
                                        <div className='tour_info'>
                                            <h2>{title}</h2>

                                            <div className='tour_info_1'>

                                                <span className='tour_rating'>
                                                    <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                                                    {totalRating === 0 ? "Not rated" : <span>({reviews?.length})</span>}
                                                </span>
                                                <span>
                                                    <i className="ri-map-pin-fill">{address}</i>
                                                </span>
                                            </div>
                                            <div className='tour_extra-details'>
                                                <span><i className="ri-map-pin-2-line"></i>{city}</span>
                                                <span><i className="ri-money-dollar-circle-line"></i>${price} /per person</span>
                                                <span><i className="ri-map-pin-time-line"></i>{distance} k/m</span>
                                                <span><i className="ri-group-line"></i>{maxGroupSize} people</span>
                                            </div>
                                            <h5>Description</h5>
                                            <p>{desc}</p>

                                        </div>
                                        {/* tour reviews section */}
                                        <div className='tour_reviews mt-4'>
                                            <h4>Reviews( {reviews ? reviews.length : 0} reviews)</h4>

                                            <Form onSubmit={submitHandle}>
                                                <div className='rating_group mb-4'>
                                                    <span className='selected' onClick={() => setTourRating(1)}>1<i className="ri-star-s-fill "></i></span>
                                                    <span className='selected' onClick={() => setTourRating(2)}>2<i className="ri-star-s-fill"></i></span>
                                                    <span className='selected' onClick={() => setTourRating(3)}>3<i className="ri-star-s-fill"></i></span>
                                                    <span className='selected' onClick={() => setTourRating(4)}>4<i className="ri-star-s-fill"></i></span>
                                                    <span className='selected' onClick={() => setTourRating(5)}>5<i className="ri-star-s-fill"></i></span>

                                                </div>
                                                <div className="review_input">
                                                    <input type='text' ref={reviewMsgRef} placeholder='share your thoughts' required />
                                                    <button className='primary_Button ' type='submit'>Submit</button>
                                                </div>
                                            </Form>
                                            <ListGroup className='user_reviews mt-4'>
                                                {
                                                    reviews?.map((reviews, index) => (
                                                        <div key={index} className='review_item'>
                                                            <img src={avatar} alt='avat' />
                                                            <div className='w-100'>
                                                                <div className='review_Info'>
                                                                    <div>
                                                                        <h5>{reviews.username}</h5>
                                                                        <p>
                                                                            {new Date(reviews.createdAt).toLocaleDateString(
                                                                                "en-US", options
                                                                            )}

                                                                        </p>
                                                                    </div>
                                                                    <span className='userReview'>
                                                                        {reviews?.rating}<i className='ri-star-s-fill'></i>
                                                                    </span>

                                                                </div>
                                                                <h6>{reviews?.reviewText}</h6>


                                                            </div>

                                                        </div>

                                                    ))
                                                }

                                            </ListGroup>


                                        </div>

                                    </div>
                                </Col>
                                <Col lg="4">
                                    <Booking tour={tour} avgRating={avgRating} title={title} />

                                </Col>

                            </Row>


                            : <h3>Loading....</h3>
                    }

                </Container>
            </section>

            <Newsletter />
        </>
    )
}

export default TourDetails