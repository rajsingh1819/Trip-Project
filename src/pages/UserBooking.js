import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import TokenDecode from '../utils/TokenDecode';
import "./styles/userBooking.css"
import { useNavigate } from 'react-router-dom';


function UserBooking() {
    const { userId } = TokenDecode();
    const navigation = useNavigate();



    const [booking, setBooking] = useState([]);

    const getBooking = () => {
        axios.get(`http://localhost:5000/booking/getBoking`)
            .then((response) => {
                setBooking(response.data.data);
            })
            .catch((error) => {
                console.log("error retrieving bookings", error);
            });
    };




    useEffect(() => {
        const isUserLoggedOut = !localStorage.getItem("autoToken");

        if (isUserLoggedOut) {
            setBooking([]); // Clear booking data
        }
    }, []);






    useEffect(() => {
        getBooking();


    }, []);

    return (
        <Container>
            {booking.length ?
                <Row>
                    <Col lg="12">
                        <div className="table-responsive">
                            <table className="table table-dark">
                                <thead>
                                    <tr>

                                        <th scope="col">Tour</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Guest Size</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {booking.map((item, index) => (
                                        (userId.toString() === item.userId.toString()) ? (
                                            <tr key={index}>

                                                <td>{item.tourName}</td>
                                                <td>{item.fullName}</td>
                                                <td>{item.guestSize}</td>
                                                <td>{item.userEmail}</td>
                                            </tr>
                                        ) : null
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
                : <h3>Loading ......</h3>
            }
        </Container>
    );
}

export default UserBooking;
