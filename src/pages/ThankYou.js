import React from 'react'

import "./styles/thankYou.css"
import { Button, Col, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
    const navigation = useNavigate();

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className='Text pt-5 '>
                        <div className='thnak_you'>
                            <span><i className='ri-checkbox-circle-line'></i></span>
                            <h1 className='mb-3 fw-semibold'>Thank You</h1>
                            <h3 className='mb-4'>your tour is booked.</h3>
                            <Button className="btn  w-25  mt-4" color="warning" onClick={() => navigation("/home")}> Back To Home</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ThankYou;