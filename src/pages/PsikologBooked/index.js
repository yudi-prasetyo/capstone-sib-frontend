import {Container, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {getAppointmentsByUserId} from "../../datasources/appointment/appointmentSource";
import moment from "moment";

const PsikologBooked = () => {
    const [data, setData ] = useState([])

    useEffect(() =>{
        const dataBooking = getAppointmentsByUserId(localStorage.getItem("id"))
        dataBooking.then((res) => {
            setData(res.data.appointments)
        })

    },[])
    return(
        <Container>
            <div className="content">
                <h2 className="text-center p-3">List Booked</h2>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Psikolog</th>
                        <th>Waktu</th>
                        <th>Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map(appoin => {
                        return (
                            <tr>
                                <td>{appoin.psychologistId.firstName} {appoin.psychologistId.lastName}</td>
                                <td>{moment(appoin.dateTime).format('LLLL')}</td>
                                <td>{appoin.link}</td>
                            </tr>
                        )
                    })

                    }

                    </tbody>
                </Table>
            </div>
        </Container>

    )
}

export default PsikologBooked;
