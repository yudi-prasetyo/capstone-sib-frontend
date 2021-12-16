import {Container, Row, Col, Button} from "react-bootstrap";
import React from "react";
import {FormBooking} from "../../components"

const PsikologResult = () => {
    const [modalShow, setModalShow] = React.useState(false);
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
                            <h4>Dr. Cahyadi Setya</h4>
                            <p>Merupakan dokter lulusan UGM </p>
                            <div>
                                <Button variant="primary" size="sm">
                                    Chat
                                </Button>{' '}
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

export default PsikologResult;
