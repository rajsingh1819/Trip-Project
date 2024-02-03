import React, { useState } from 'react'
import CommonSectiom from './CommonSectiom'
import { Col, Container, Row } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard';
import Newsletter from './Newsletter';


function SearchResultList() {
    const location = useLocation();
    const [data] = useState(location.state);
    // console.log(data);

    return <>
        <CommonSectiom title={"Tour Search Result"} />
        <section>
            <Container>
                <Row>

                    {
                        data.length === 0 ?
                            <h4 className='text-center'>Loading.....</h4>

                            :
                            data?.map(tour =>
                                <Col lg="3" className='mb-4' key={tour._id}>
                                    <TourCard tour={tour} />

                                </Col>
                            )

                    }

                </Row>
            </Container>
        </section>
        <Newsletter />

    </>
}

export default SearchResultList