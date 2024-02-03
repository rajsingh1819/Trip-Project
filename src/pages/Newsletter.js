import React from 'react'
import "./styles/newsletter.css"
import { Container, Row, Col } from 'reactstrap'
import maleTourist from "../assets/images/male-tourist.png"


function Newsletter() {
    return <section className='newsLetter'>

        <Container>
            <Row>
                <Col lg='6'>
                    <div className='newletter_content'>
                        <h2>Subscribe now to get useful traveling informtion.</h2>
                        <div className='newletter_input'>
                            <input type='email' placeholder='enter your email' />
                            <button className='newletter_btn'>Subscribe Now !!!</button>

                        </div>

                    </div>

                </Col>
                <Col lg='6'>
                    <div className='newsletter_img'>
                        <img src={maleTourist} alt='img' />
                    </div>

                </Col>
            </Row>
        </Container>
    </section>
}

export default Newsletter