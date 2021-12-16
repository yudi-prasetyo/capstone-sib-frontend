import {Button, Form, Modal} from "react-bootstrap";
import React from "react";

const ModalEdit = (props) => {
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
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama depan</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nama depan" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama belakang</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nama belakang" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Alamat email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tanggal Lahir</Form.Label>
                        <Form.Control type="date" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>{console.log("hihih")}}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEdit;
