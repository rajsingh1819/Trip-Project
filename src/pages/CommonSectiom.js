import React from 'react'
import "./styles/commonSectiom.css"
import { Col, Container, Row } from 'reactstrap'

function CommonSectiom({ title }) {
    return (
        <section className='common_section'>
            <Container>
                <Row>
                    <Col lg='12'><h1>{title}</h1></Col>
                </Row>
            </Container>

        </section>
    )
}

export default CommonSectiom