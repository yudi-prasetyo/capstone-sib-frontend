import React, {useState, useEffect} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import {loginUser} from "../../datasources/user/userSource";
import { useHistory } from "react-router-dom";


const Login = () => {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [token, setToken ] = useState('');
    let history = useHistory()

    useEffect(() => {
        if(localStorage.getItem('token')){
            history.push("/")
        }
    })

    const refreshPage =() => {
        window.location.reload()
    }

    const onSubmit = async () => {
        console.log("email:", email)
        console.log("passwd:", password)
        const response = loginUser({
            email: email,
            password: password
        })
        await response.then((res)=> {
           localStorage.setItem("token", res.token)
        })
            .then(()=> refreshPage())

    }

    return(
            <div className="container">
                <h1 className="mt-5 p-3 text-center ">Login</h1>
                <Row className=" mt-5 ">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto rounded-1">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Alamat email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email}
                                              onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password}
                                              onChange={(e) => setPassword(e.target.value)}

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
                        <a href="/register">Belum pernah Daftar</a>
                    </Col>
                </Row>
            </div>
    )
}

export default Login;
