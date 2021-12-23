import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {registerUser} from "../../datasources/user/userSource";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")
    const [tanggal, setTanggal ] = useState("")
    const [gender, setGender ] = useState("")
    let history = useHistory()

    useEffect(() => {
        if(localStorage.getItem('token')){
            history.push("/")
        }
    })

    const onSubmit = () => {
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(password)
        console.log(tanggal)
        console.log(gender)

        registerUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            dateOfBirth: tanggal,
            gender: gender
        })
            .then(res=> {
                console.log("Berhasil",res)
            })
            .catch(err => {
                console.log("gagal", err)
            })

    }

    return(
        <div className="container">
            <h1 className="mt-5 p-3 text-center ">Register</h1>
            <Row className=" ">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto rounded-1">
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Nama depan</Form.Label>
                            <Form.Control type="text" placeholder="Masukkan nama depan" value={firstName}
                                onChange={(e) => setFirstName(e.target.value) }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Nama belakang</Form.Label>
                            <Form.Control type="text" placeholder="Masukkan nama belakang" value={lastName}
                                          onChange={(e) => setLastName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Alamat email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Tanggal Lahir</Form.Label>
                            <Form.Control type="date" placeholder="Tanggal lahir" value={tanggal}
                                          onChange={(e) => setTanggal(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text" placeholder="gender" value={gender}
                                          onChange={(e) => setGender(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={onSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="mx-auto  p-2">
                <Col className="text-center">
                    <a href="/login">Sudah punya akun</a>
                </Col>
            </Row>
        </div>
    )
}

export default Register;
