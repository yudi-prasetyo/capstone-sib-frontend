import {CardComponents, CarouselContainer} from "../../components"
import {homeBg} from '../../assets'


const Home = () => {
    return (
        <div className="container">
            <div className="row px-2 mt-5 ">
                <div className="col-sm-12 col-12 col-lg-6 col-md-6 pt-5">
                            <h1 className="display-5 fw-bold">Cari Psikolog</h1>
                            <p className="col-md-8 fs-4">Aplikasi ini merupakan
                                tempat mencari psikolog.</p>
                            <button className="btn btn-info btn-lg text-white" type="button">Get Started</button>
                </div>
                <div className="col-sm-12 col-12 col-lg-6 col-md-6">
                    <img src={homeBg} alt="gambar" className="img-fluid"/>
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
    )
}

export default Home;
