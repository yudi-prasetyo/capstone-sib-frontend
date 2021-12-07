import React from "react";
import {Carousel} from "react-bootstrap";


const CarouselContainer = () => {
    return(
        <Carousel className="p-5" variant="dark">
            <Carousel.Item>
                <h3>Masalah sudah sangat menggang</h3>
                <p>Sebuah masalah bisa saja membuat seseorang sulit untuk berkonsentrasi dalam melakukan pekerjaan atau aktivitas sehari-hari. Tak jarang pula masalah membuat seseorang putus asa, cemas berlebihan, sulit tidur, dan kehilangan nafsu makan. Ketika sebuah masalah sudah mengganggu kehidupan dan aktivitas Anda, kemungkinan Anda membutuhkan konsultasi psikologi.</p>
            </Carousel.Item>
            <Carousel.Item>
                <h3>Gagal menyelesaikan masalah sendiri</h3>
                <p>Ketika Anda merasa sedih, cemas, atau takut, mungkin Anda sudah mencoba melakukan berbagai upaya untuk merasa lebih baik, misalnya dengan curhat, membaca buku motivasi, ataupun mengalihkan pikiran dengan olahraga.</p>
          </Carousel.Item>
            <Carousel.Item>
                <h3>Melampiaskan masalah ke hal negatif</h3>
                <p>Tanda lain Anda membutuhkan konsultasi psikologi adalah ketika Anda berusaha melupakan masalah dengan melakukan hal-hal yang tidak baik untuk Anda, misalnya merokok, mengonsumsi minuman beralkohol, menggunakan obat-obat terlarang, atau bahkan makan berlebihan.</p>
            </Carousel.Item>
            <Carousel.Item>
                <h3>Baru saja mengalami kejadian traumatis</h3>
                <p>Apabila Anda baru saja mengalami kejadian traumatis, seperti kehilangan sosok tercinta, perceraian, atau kehilangan pekerjaan, sebaiknya Anda melakukan konsultasi psikologi, terutama bila rasa sedih yang Anda rasakan tidak kunjung hilang.</p>
      </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer;
