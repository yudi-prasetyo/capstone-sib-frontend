import {Button, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";
import { createAppointment } from "../../../datasources/appointment/appointmentSource";

const FormBooking = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [link, setLink] = useState("");

    const onSubmit = async () => {
        const userId = localStorage.getItem("id");
        const psychologistId = props.psychologist._id;
        const dateTime = `${date}T${time}`;
        await createAppointment({userId, psychologistId, dateTime, link});

        setDate("");
        setTime("");
        setLink("");
    }

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop="static"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Booking psikolog
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Isi Form </h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tanggal Pertemuan</Form.Label>
                        <Form.Control type="date" placeholder="Masukkan tanggal pertemuan" value={date}
                                    onChange={(e) => setDate(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Jam</Form.Label>
                        <Form.Control type="time" placeholder="Masukkan waktu pertemuan" value={time}
                                    onChange={(e) => setTime(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Link</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan link pertemuan" value={link}
                                      onChange={(e) => setLink(e.target.value) }
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FormBooking;
