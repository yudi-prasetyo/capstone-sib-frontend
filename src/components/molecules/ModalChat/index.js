import {Button, Form, Modal} from "react-bootstrap";
import React, {useState, useEffect, useContext} from "react";
import {postMessage, getChatRoomByUserAndPsychologistId, getConversationById} from "../../../datasources/chat/chatSource";
import "./ModalChat.css";
import { SocketContext } from "../../../config/Context/socket";

const ModalChat = (props) => {
    const socket = useContext(SocketContext);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    console.log(props.roomId);

    const onSend = async () => {
        const response = await postMessage(props.roomId, message);
        setMessage("");
    }

    useEffect(() => {
        socket.on('new message', (data) => {
            setMessages(messages => [...messages, data.message]);
        });
    }, []);

    useEffect(() => {
        getConversationById(props.roomId)
            .then(res => {
                console.log(res.conversation);
                setMessages(res.conversation);
            });
    }, [props?.roomId]);

    useEffect(() => {
        const id = localStorage.getItem("id");
        const role = localStorage.getItem("role");
        
        socket.emit('identity', id, role);

        console.log('psychologist id', props.psychologist._id)
        socket.emit('subscribe', props.roomId, props.psychologist._id);
    }, [props?.psychologist?._id, props?.roomId]);

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
                    Message Chat to <span> {props.psychologist.firstName} {props.psychologist.lastName}</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="chat-box">
                    <div className="chat in">
                        {messages.map((message) => {
                            const role = localStorage.getItem("role");
                            const messageClass = (message.postedByUser && role === "user") || (message.postedByPsychologist 
                                && role === "psychologist") ? "right" : "left"; 

                            return(
                                <div className={`details ${messageClass}`}>
                                    <p>{message.message}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Form.Control as="textarea" value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button onClick={()=>{onSend()}}>Kirim</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalChat;
