import {Container, Row, Col, Button} from "react-bootstrap";
import React,{useEffect} from "react";
import {FormBooking, ModalChat} from "../../components"
import {getPsychologistById} from "../../datasources/psikolog/psikologSource";


const Psikolog = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [chatShow, setChatShow] = React.useState(false);
    const [resultPsikolog, setResultPsikolog] = React.useState([])


    useEffect(() => {
        const psikologDataById = getPsychologistById(props.match.params.id)
        psikologDataById.then((res) => setResultPsikolog(res.data.psychologist))

    },[])

    return(
        <Container>
            <div className="content d-grid gap-5">
                <Row>
                    <Col sm={4}>
                        <div className="profile-pict">
                            <img src="https://static.change.org/profile-img/default-user-profile.svg"  alt="gambar"/>
                        </div>
                    </Col>
                    <div className="col">
                        <div className="profil-details">
                            <h4>{resultPsikolog.firstName} {resultPsikolog.lastName} </h4>
                            <p>{resultPsikolog.email} </p><p>Spesilitis {resultPsikolog.specialities} </p>
                            <div>
                                <Button variant="primary" size="sm" onClick={() => setChatShow(true)}>
                                    Chat
                                </Button>{' '}
                                <ModalChat
                                    show={chatShow}
                                    onHide={() => setChatShow(false)}
                                />

                                <Button variant="secondary" size="sm" onClick={() => setModalShow(true)}>
                                    Booking
                                </Button>
                                <FormBooking
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </Container>
    )
}

export default Psikolog;
