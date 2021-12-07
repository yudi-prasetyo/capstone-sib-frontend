import {Col, Row, Card} from "react-bootstrap";

const CardComponents = () => {
    return (
        <Row className="g-3">
            <Col className="">
                <Card style={{ width: '18rem' }}>
                    {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                    <Card.Body>
                        <Card.Title>Cari Psikolog </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="h-25">
                <Card style={{ width: '18rem' }}>
                    {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                    <Card.Body>
                        <Card.Title>Konsultasi Chating</Card.Title>
                        <Card.Text>
                            Teman bisa melakukan chating dengan psikolog yang ada untuk konsultasi masalah yang sedang dialami.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="">
                <Card style={{ width: '18rem' }}>
                    {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                    <Card.Body>
                        <Card.Title>Booking Psikolog</Card.Title>
                        <Card.Text>
                            Teman bisa melakukan perjanjian dengan psikolog agar bisa menjelaskan permasalahn teman teman secara langsung
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    )
}

export default CardComponents;
