import {Button, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {updateUserById} from "../../../datasources/user/userSource";
import jwt from "jwt-decode";

const ModalEdit = (props) => {
    const [id , setId ] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")
    const [tanggal, setTanggal ] = useState("")
    const [gender, setGender ] = useState("")

    const getID = () => {
        return  jwt(localStorage.getItem('token'))
    }

    const onSubmit = () => {
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(password)
        console.log(tanggal)
        console.log(gender)
        setId(getID.id)

        updateUserById({id},
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                dateOfBirth: tanggal,
                gender: gender
            }
        ).then(res =>{console.log(res)})
    }


    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Akun
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Edit </h4>
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
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEdit;
