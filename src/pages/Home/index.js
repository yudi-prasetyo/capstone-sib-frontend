import Card from "../../components/Card";

const Home = () => {
    return (
        <div className="container">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Cari Psikolog</h1>
                    <p className="col-md-8 fs-4">Aplikasi ini merupakan
                        tempat mencari psikolog.</p>
                    <button className="btn btn-primary btn-lg" type="button">Get Started</button>
                </div>
            </div>
            <Card />
        </div>
    )
}

export default Home;
