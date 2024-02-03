import React, { useEffect, useState } from 'react'
import axios from "axios";

import TourCard from '../shared/TourCard'
import { Col } from 'reactstrap';
function FeaturedTourList() {
    const [tourdata, setTourData] = useState([]);

    // fetch data from backend
    const getAlldata = () => {
        axios.get("http://localhost:5000/tours/AllTour")
            .then((response) => {
                setTourData(response.data.data)

            })
            .catch((error) => {
                console.log("error retrieving users", error);

            })
    }



    useEffect(() => {

        getAlldata();

    }, [])

    return (
        <>
            {
                tourdata.length > 0 ?
                    tourdata.map(tour => (
                        <Col lg="3" className='mb-4' key={tour._id}>
                            <TourCard tour={tour} />
                        </Col>
                    ))
                    : <h3>Loading.....</h3>
            }
        </>
    )

}

export default FeaturedTourList