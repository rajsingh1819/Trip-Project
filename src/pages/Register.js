import React, { useState } from 'react'
import "./styles/login.css"

import registerImg from "../assets/images/register.png"
import userIcon from "../assets/images/user.png"
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Register() {
    const navigation = useNavigate();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    // ...

    const handleClick = async (e) => {
        e.preventDefault();
        const data = {
            username: userName,
            email: email,
            password: password
        };

        console.log(data);
        try {
            const response = await axios.post("http://localhost:5000/users/registeration", data);
            // console.log(response.data);  // Log backend response

            alert("Successfully Registered !!!");
            navigation("/login");
        } catch (error) {
            alert("Something went wrong");
            console.error(error);
        }
    };










    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8" className='Login_part'>
                        <div className='login_container'>
                            <div className='login_img'>
                                <img src={registerImg} alt='login' />

                            </div>

                            <div className='login_form'>
                                <div className='user'>
                                    <img src={userIcon} alt='user' />
                                </div>
                                <h2>Register</h2>

                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type='text' placeholder='Username' required onChange={(e) => setUserName(e.target.value)} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                                    </FormGroup>


                                    <Button className='btn secondary_btn auth_btn' type='submit'>Create Account</Button>
                                </Form>
                                <p> Already have an account? <Link to="/login">Login</Link></p>

                            </div>
                        </div>



                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Register;