import {Container, Col, Row, Button} from "react-bootstrap";
import moment from "moment";
import { ModalEdit} from "../../components"
import {PsikologBooked} from "../../pages"
import React,{useEffect} from "react";
import {getUserById} from "../../datasources/user/userSource";

const Profil = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [user, setUser] = React.useState("");

    const userHandler = (user) => {
        setUser(user);
    }

    const showHandler = () => {
        setModalShow(false);
    }

    useEffect(()=>{
        console.log("oke")
        const datauser = getUserById(props.id)
        datauser.then((res) => setUser(res.data.user))
    }, [])

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
                                <h4>Nama : {user.firstName} {user.lastName}</h4>
                                <h4>email : {user.email}</h4>
                                <h4>Gender : {user.gender}</h4>
                                <h4>Tanggal Lahir : {moment(user.dateOfBirth).format('D MMMM YYYY')}</h4>
                            </div>
                        </Row>
                        <Button variant="primary" className="mt-5" onClick={() => setModalShow(true)}>Edit</Button>
                        <ModalEdit
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            userHandler={userHandler}
                            showHandler={showHandler}
                            user={user}
                            />
                    </Col>
                </Row>
            </div>
            <PsikologBooked />
        </Container>
    )
}

export default Profil;
