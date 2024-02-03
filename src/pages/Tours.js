import React, { useEffect, useState } from 'react'
import axios from "axios";
import CommonSectiom from './CommonSectiom'
import { Container, Row, Col } from 'reactstrap'
import SearchBar from '../shared/SearchBar'

// import tourData from ".././assets/data/tours"
import TourCard from '../shared/TourCard'

function Tours() {
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
    // console.log("All card data  =>", tourdata);

    return (
        <>
            {
                tourdata.length > 0 ?
                    <>
                        <CommonSectiom title={"All Tours"} />
                        <section>
                            <Container>
                                <Row>
                                    <SearchBar />
                                </Row>
                            </Container>
                        </section>
                        <section>
                            <Container>
                                <Row>
                                    {
                                        tourdata?.map(tour => (
                                            <Col lg="3" className='mb-4' key={tour._id}>
                                                <TourCard tour={tour} />
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Container>
                        </section>
                    </>
                    : <h3>Loading......</h3>
            }
        </>
    )
}

export default Tours