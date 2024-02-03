import React, { useRef } from 'react'
import { Col, Form, FormGroup } from 'reactstrap'
import "./Styles/search.css"


import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const navigation = useNavigate();

    const searchHandler = () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroup = maxGroupSizeRef.current.value;

        if (!location || !distance || !maxGroup) {
            return alert("All fields are required !!!");
        }

        axios.get(`http://localhost:5000/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroup}`)
            .then((response) => {
                navigation(`/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroup}`, { state: response.data.data });

            })
            .catch((error) => {
                alert("Something went wrong");
            });
    };

    return (
        <Col lg='12'>
            <div className='search_bar'>
                <Form className='formData'>
                    <FormGroup className='form_group form_group-fast'>
                        <span ><i className="ri-map-pin-line"></i></span>
                        <div>
                            <h6>Location</h6>
                            <input type='text' placeholder='Where are you going?' ref={locationRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className='form_group form_group-fast'>
                        <span ><i className="ri-map-pin-time-line"></i></span>
                        <div>
                            <h6>Distance</h6>
                            <input type='number' placeholder='Distance k/m' ref={distanceRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className='form_group form_group-fast'>
                        <span ><i className="ri-group-line"></i></span>
                        <div>
                            <h6>Max People</h6>
                            <input type='number' placeholder='0' ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    <span className='search_icon' type="submit" onClick={searchHandler}>
                        <i className="ri-search-line"></i>
                    </span>

                </Form>

            </div>


        </Col>
    )
}

export default SearchBar