import {Container, Col, Row, Button} from "react-bootstrap";
import { ModalEdit} from "../../components"
import {PsikologBooked} from "../../pages"
import React from "react";

const Profil = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <Container>
            <div className="content">
                <h2 className="text-center p-3">Profil Pengguna</h2>
                <Row>
                    <Col sm={4}>
                        <div className="profile-pict">
                            <img src="https://static.change.org/profile-img/default-user-profile.svg"  alt="gambar"/>
                        </div>
                    </Col>
                    <Col >
                        <Row>
                            <div className="profil-details">
                                <h4>Nama :</h4>
                                <h4>Tanggal Lahir :</h4>
                            </div>
                        </Row>
                        <Button variant="primary" className="mt-5" onClick={() => setModalShow(true)}>Edit</Button>
                        <ModalEdit
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            />
                    </Col>
                </Row>
                <PsikologBooked />
            </div>
        </Container>
    )
}

export default Profil;
