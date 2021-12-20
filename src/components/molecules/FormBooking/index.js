import {Button, Form, Modal} from "react-bootstrap";
import React from "react";

const FormBooking = (props) => {
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
                        <Form.Control type="date" placeholder="Enter email" />
                    </Form.Group>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Jam</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option><option>17</option>
                        </select>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>{console.log("hihih")}}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FormBooking;
