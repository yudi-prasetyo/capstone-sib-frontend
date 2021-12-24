import {Container, Row, Col} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {getAllPsychologists} from "../../datasources/psikolog/psikologSource";
import {Link} from "react-router-dom";

const PsikologList = () => {

    const [psikolog, setPsikolog ] = useState([])

    useEffect(() => {

        const datapsikolog = getAllPsychologists()
        datapsikolog.then((res) => setPsikolog(res))


    }, [])

    return(
        <Container>
            <div className="content d-grid gap-5">
                {/*list data psikolog*/}
                {
                    psikolog.map(psiko => {
                        return (
                            <Row>
                                <Col sm={4}>
                                    <div className="profile-pict">
                                        <img src="https://static.change.org/profile-img/default-user-profile.svg"  alt="gambar"/>
                                    </div>
                                </Col>
                                <div className="col">
                                    <div className="profil-details">
                                        <h4>{psiko.firstName} {psiko.lastName}</h4>
                                        <p>{psiko.email}</p>
                                        <p> Spesialisasi {psiko.specialities} </p>
                                        <div>
                                            {/*Tombol pilih data psikolog yang dituju*/}
                                            <Link to={`/psikolog/${psiko._id}`}>
                                                Pilih
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        )
                    })

                }

            </div>
        </Container>
    )
}

export default PsikologList;
