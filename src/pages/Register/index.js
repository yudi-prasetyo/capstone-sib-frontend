import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

const Register = () => {
    return(
        <div className="container">
            <h1 className="mt-5 p-3 text-center ">Register</h1>
            <Row className=" mt-5 ">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto rounded-1">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control type="text" placeholder="Masukkan nama lengkap" />
                        </Form.Group>

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
                    <a href="/">Kembali ke Home</a>
                </Col>
                <Col className="text-center">
                    <a href="/login">Sudah punya akun</a>
                </Col>
            </Row>
        </div>
    )
}

export default Register;
