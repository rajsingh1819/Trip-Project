import React, { useState } from 'react'
import "./styles/login.css"

import loginImg from "../assets/images/login.png"
import userIcon from "../assets/images/user.png"
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const navigation = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        };

        // console.log(data);
        try {
            const response = await axios.post("http://localhost:5000/users/login", data);
            const token = response.data.token;
            localStorage.setItem("autoToken", token);
            setEmail('');
            setPassword('');

            alert("Successfully Login !!!");
            navigation("/home");
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
                                <img src={loginImg} alt='login' />

                            </div>

                            <div className='login_form'>
                                <div className='user'>
                                    <img src={userIcon} alt='user' />
                                </div>
                                <h2>Login</h2>

                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                                    </FormGroup>

                                    <Button className='btn secondary_btn auth_btn' type='submit'>Login</Button>

                                </Form>
                                <p>Don't have an account? <Link to="/register">Register</Link></p>

                            </div>
                        </div>



                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Login