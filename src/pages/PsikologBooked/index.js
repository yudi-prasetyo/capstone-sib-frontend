import {Container, Table} from "react-bootstrap";
import React from "react";

const PsikologBooked = () => {
    return(
        <Container>
            <div className="content">
                <h2 className="text-center p-3">List Booked</h2>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Psikolog</th>
                        <th>Tanggal</th>
                        <th>Jam</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Jadi</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </Container>

    )
}

export default PsikologBooked;
