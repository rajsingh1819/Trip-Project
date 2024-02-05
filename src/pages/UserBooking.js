import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';
import TokenDecode from '../utils/TokenDecode';
import "./styles/userBooking.css"
import { useNavigate } from 'react-router-dom';


function UserBooking() {

    const { userId } = TokenDecode();
    const navigation = useNavigate();



    const [booking, setBooking] = useState([]);

    const getBooking = () => {
        if (!(localStorage.getItem("autoToken"))) {
            return null
        }
        else {
            axios.get(`http://localhost:5000/booking/getBoking`)
                .then((response) => {
                    setBooking(response.data.data);
                })
                .catch((error) => {
                    console.log("error retrieving bookings", error);
                });
        }
    };







    useEffect(() => {
        getBooking();


    }, []);

    return (
        <Container>

            <Row>
                <Col lg="12">
                    <div className="table-responsive">


                        <table className="table table-dark">
                            <thead className='tr1'>
                                <tr>

                                    <th colSpan={7} >Booking Status</th>

                                </tr>
                            </thead>
                            <thead>



                                <tr>

                                    <th scope="col">Tour</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Guest Size</th>
                                    <th scope="col">Email</th>
                                    <th colSpan={2}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {booking.length > 0 ?
                                    booking.map((item, index) => (
                                        (userId.toString() === item.userId.toString()) ?
                                            (

                                                <tr key={index}>

                                                    <td className='Change'>{item.tourName}</td>
                                                    <td>{item.fullName}</td>
                                                    <td>{item.guestSize}</td>
                                                    <td>{item.userEmail}</td>
                                                    <td><Button color="danger">Cancel</Button></td>
                                                    <td><Button color="primary">Edit</Button></td>
                                                </tr>
                                            )

                                            : null


                                    ))



                                    : (
                                        <tr>
                                            <td colSpan={5} className="text-center">No bookings available</td>
                                        </tr>
                                    )


                                }

                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>

        </Container>
    );
}

export default UserBooking;

