import {Button, Form, Modal} from "react-bootstrap";
import React from "react";
import "./ModalChat.css"

const ModalChat = (props) => {
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
                    Massage Chat to <span> Dr Chayadi</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Nama Psikolo*/}
                <div className="chat-box">
                    <div className="chat out">
                        <div className="details">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, ex! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur doloribus et fuga ipsam ipsum itaque libero modi odio, omnis quae quisquam repellat rerum sapiente tempore voluptas voluptatem voluptatibus voluptatum!</p>
                        </div>
                    </div>
                    <div className="chat in">
                        <div className="details">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, ex!</p>
                        </div>
                    </div>

                </div>
            </Modal.Body>
            <Modal.Footer>
                <Form.Control as="textarea"/>
                <Button onClick={()=>{console.log("hihih")}}>Kirim</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalChat;
