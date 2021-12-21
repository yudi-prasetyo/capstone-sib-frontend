import {Container, Row, Col, Button} from "react-bootstrap";
import React from "react";

const PsikologList = () => {

    return(
        <Container>
            <div className="content d-grid gap-5">
                {/*list data psikolog*/}
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
                                {/*Tombol pilih data psikolog yang dituju*/}
                                <Button variant="primary" size="sm" onClick={event => window.location.href='./psikolog'}>
                                    Pilih
                                </Button>

                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </Container>
    )
}

export default PsikologList;
