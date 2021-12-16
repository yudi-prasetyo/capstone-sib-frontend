import React from "react";
import {Form, Button, Row, Col} from "react-bootstrap";

const Login = () => {
    return(
            <div className="container">
                <h1 className="mt-5 p-3 text-center ">Login</h1>
                <Row className=" mt-5 ">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto rounded-1">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Alamat email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="mx-auto  p-2">
                    <Col className="text-center">
                        <a href="/register">Belum pernah Daftar</a>
                    </Col>
                </Row>
            </div>
    )
}

export default Login;
