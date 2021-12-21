import {CardComponents, CarouselContainer} from "../../components"
import React from "react";
import {Button, Container} from "react-bootstrap";
import {iconMain} from "../../assets"
import "./home.css"

const Home = () => {
    return (
        <Container>
            <div className="content">
            <div className="row px-2 mb-5">
                <div className="col-sm-12 col-12 col-lg-6 col-md-6 pt-5">
                            <h1 className="display-5 fw-bold">Cari Psikolog</h1>
                            <p className="col-md-8 fs-4">Aplikasi ini merupakan
                                tempat mencari psikolog.</p>
                            <Button className="btn btn-info btn-lg text-white" onClick={event => window.location.href='./list'}>
                                Cari
                            </Button>

                </div>
                <div className="col-sm-12 col-12 col-lg-6 col-md-6">
                    <img src={iconMain} alt="gambar" className="img-fluid gambar"/>
                </div>
            </div>

            <div className="row my-5">
                <h2 className="text-center display-5">Kapan Harus Melakukan Konsultasi Psikologi?</h2>
                <CarouselContainer />
            </div>

            <div className="row">
                <h2 className="text-center display-5" id="fitur">Fitur yang kami sediakan</h2>
                < CardComponents />
            </div>
            </div>
        </Container>
    )
}

export default Home;
