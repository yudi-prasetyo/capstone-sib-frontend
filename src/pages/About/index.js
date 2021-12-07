import './About.css';
import React from 'react';
import {Row, Col} from "react-bootstrap";


function About () {
    return(
        <div className="container">
            <div className="content">
                <h1 className="text-center text-info">About Us</h1>
                <p>Salah satu permasalahan yang sering disepelekan dari masyarakat kita adalah kesehatan mental. Sering kali seseorang tidak mau pergi ke psikolog karena alasan malu ataupun mahalnya biaya konsultasi. Penyebaran virus COVID-19 pada masyarakat indonesia disisi lain juga memberikan beberapa masalah seperti perasaan kecemasan, ketakutan, tekanan mental akibat dari isolasi, pembatasan jarak fisik dan hubungan sosial, serta ketidakpastian.
                    Kami ingin menghadirkan sebuah platform untuk memudahkan masyarakat melakukan konsultasi ke psikolog, dan juga menormalisasi berkonsultasi mengenai kesehatan mental langsung ke psikolog.
                </p>

                <div className="subcontent mt-5">
                    <h2 className="text-center text-info">Created by</h2>
                    <Row className="text-center">
                        <Col>
                            <h3> Yudi Prasetyo </h3>
                            <p>F299R4313</p>
                        </Col>
                        <Col>
                            <h3> Fiki Aviantono </h3>
                            <p>F227R4194</p>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    )
}
export default About;
