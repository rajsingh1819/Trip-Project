import React from 'react'
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';


import "./Styles/tourCard.css"
function TourCard({ tour }) {

    const { _id, title, photo, city, price, featured, reviews } = tour;

    const { totalRating, avgRating } = calculateAvgRating(reviews);



    return (
        <div className='tour_card'>
            <Card>
                <div className='tour_img'>
                    <img src={photo} alt='tour-img' />
                    {featured && <span>Featured</span>}

                </div>
                <CardBody>
                    <div className='card_top'>
                        <span className='tour_location'>
                            <i className="ri-map-pin-line"></i> {city}
                        </span>
                        <span className='tour_rating'>
                            <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                            {totalRating === 0 ? "Not rated" : <span>({reviews.length})</span>}
                        </span>
                    </div>
                    <h5 className='tour_title'><Link to={`/tours/${_id}`}>{title}</Link></h5>

                    <div className='card_bottom'>
                        <h5>
                            ${price}<span>/per person</span>
                        </h5>
                        <h5 className='booking_btn' color='white'>
                            <Link to={`/tours/${_id}`}> Book Now</Link>
                        </h5>


                    </div>


                </CardBody>
            </Card>


        </div>
    )
}

export default TourCard