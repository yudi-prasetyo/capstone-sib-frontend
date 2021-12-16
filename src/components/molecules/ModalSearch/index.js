import {Modal, Button} from "react-bootstrap";

const CenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Pencarian Psikolog
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Mood Range</h4>
                <p>
                    Demi mumdahkan kita untuk mencari psikolog yang sesuai dengan karakteristik masalah anda
                </p>
                <label htmlFor="customRange3" className="form-label">Urgensi Masalah</label>
                <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
                <label htmlFor="customRange3" className="form-label">Lama masalah</label>
                <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
                <label htmlFor="customRange3" className="form-label">Tingkat Kesulitan Masalah</label>
                <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>{console.log("hihih")}}>Cari</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CenteredModal;
