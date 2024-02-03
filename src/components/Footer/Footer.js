import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./footer.css";


function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row className='social-links'>
                    <Col xs='12' className='logo'>
                        <Link to="#"><i className="ri-facebook-circle-line"></i></Link>
                        <Link to="#"><i className="ri-instagram-line"></i></Link>
                        <Link to="#"><i className="ri-twitter-line"></i></Link>
                        <Link to="#"><i className="ri-youtube-line"></i></Link>
                    </Col>
                </Row>

                <Row className='navigation-links'>
                    <Col xs='12' className='text'>
                        <span><Link to="#">Home</Link></span>
                        <span> <Link to="#">News</Link></span>
                        <span> <Link to="#">About</Link></span>
                        <span> <Link to="#">Connect Us</Link></span>
                        <span> <Link to="#">Our Team</Link></span>
                    </Col>

                </Row>


            </Container>
            <div className='Copywrite'>
                <span>&copy; 2024. All rights reserved</span>

            </div>
        </footer>
    );
}

export default Footer;
