import {Col, Row} from "react-bootstrap";

const Card = () => {
    return (
        <div className="container" >
            <h3>Lebih dari 100.000 orang memilih
                konsultasi psikolog</h3>
            <Row>
                <Col>
                    <div className="card" style={{width : "300px"}}>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" alt="" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">
                                Fitur 1
                            </h5>
                            <p className="card-text">
                                Jadi seperti ini fiturnya
                            </p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card" style={{width : "300px"}}>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" alt="" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">
                                Fitur 1
                            </h5>
                            <p className="card-text">
                                Jadi seperti ini fiturnya
                            </p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card" style={{width : "300px"}}>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" alt="" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">
                                Fitur 1
                            </h5>
                            <p className="card-text">
                                Jadi seperti ini fiturnya
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Card;
