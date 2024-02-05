import React, { useEffect } from 'react'
import "./styles/home.css"
import { Container, Row, Col } from 'reactstrap'


import herroImg from "../assets/images/hero-img01.jpg"
import herroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import wordImage from "../assets/images/world.png"
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../Featured-tours/FeaturedTourList'
import Newsletter from './Newsletter'
import TokenDecode from '../utils/TokenDecode'
function Home() {




    return (
        <>
            <section>
                <Container  >
                    <Row >
                        <Col lg="6">
                            <div className='hero_content'>
                                <div className='hero_subtitile'>
                                    <Subtitle subtitle={'Know Before You Go'} />
                                    <img src={wordImage} alt='wordimage' />
                                </div>
                                <h1>
                                    Traveling opens the door to creating{" "}
                                    <span className='highlight'>memories</span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                                    Molestiae tempora dignissimos, animi praesentium molestias
                                    perferendis porro expedita delectus. Soluta natus porro.
                                </p>

                            </div>
                        </Col>
                        <Col lg="2">
                            <div className='hero_img-box'>
                                <img src={herroImg} alt='heroimg' />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className='hero_img-box mt-4'>
                                <video src={heroVideo} alt='' controls />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className='hero_img-box mt-5'>
                                <img src={herroImg02} alt='heroimg02' />
                            </div>
                        </Col>
                        <SearchBar />
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="3">
                            <h5 className='services_subtitle'> What we serve</h5>
                            <h2 className='services_title'>We offer our best services</h2>
                        </Col>

                        <ServiceList />

                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='mb-5'>
                            <Subtitle subtitle={"Explore"} />
                            <h2 className='featured_tour_title'>Our featured tours</h2>

                        </Col>
                        {/* Our featured tours */}
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>

            {/* traveling informtion. */}
            <Newsletter />
        </>
    )
}

export default Home