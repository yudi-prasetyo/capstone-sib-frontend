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
                            Dimana Teman teman bisa mencari psikolog yang ada, dengan menyesuaikan waktu dan kesediaan psikolog.
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
                            Teman Teman bisa melakukan chating dengan psikolog yang ada untuk konsultasi masalah yang sedang dialami.
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
                            Teman bisa melakukan perjanjian dengan psikolog agar bisa menjelaskan permasalahan teman teman secara langsung
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    )
}

export default CardComponents;
