import {Button, Form, Modal} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import moment from "moment";
import {updateUserById} from "../../../datasources/user/userSource";

const ModalEdit = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail ] = useState("")
    const [tanggal, setTanggal ] = useState("")
    const [gender, setGender ] = useState("")

    useEffect(() => {
        setFirstName(props.user.firstName);
        setLastName(props.user.lastName);
        setEmail(props.user.email);
        setTanggal(moment(props.user.dateOfBirth).format('YYYY-MM-DD'));
        setGender(props.user.gender);
    }, [])

    const onSubmit = () => {
        const id = localStorage.getItem("id");

        updateUserById(id,
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                dateOfBirth: tanggal,
                gender: gender
            }
        ).then(res => {        
            props.userHandler({
                firstName: firstName,
                lastName: lastName,
                email: email,
                dateOfBirth: tanggal,
                gender: gender
            }
        )})

        setFirstName("");
        setLastName("");
        setEmail("");
        setTanggal("");
        setGender("");
        props.showHandler();
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
