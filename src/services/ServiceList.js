import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from "../assets/images/weather.png"
import guideImg from "../assets/images/guide.png"
import customizationImg from "../assets/images/customization.png"

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Get accurate and up-to-date weather information for confident activity planning",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Explore new destinations with experienced tour guides, discovering hidden gems and local insights.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Tailor your travel experience with personalized services, ensuring a uniquely crafted journey to meet your needs"
    }
];

function ServiceList() {
    return (
        <>
            {
                servicesData.map((item, index) => (
                    <Col lg='3' key={index} >
                        <ServiceCard item={item} />
                    </Col>

                ))
            }
        </>
    )
}

export default ServiceList