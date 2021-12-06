import Card from "../../components/Card";
import {homeBg} from '../../assets'

const Home = () => {
    return (
        <div className="container">
            <div className="row px-2">
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
            <Card />
        </div>
    )
}

export default Home;
