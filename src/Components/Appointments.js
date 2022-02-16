import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import apiInstance from '../axios.interceptor';


export default function Appointments(){
    const [appointments, setAppintments] = useState([]);

    const navegate = useNavigate();

    useEffect(() => {
        loadAll();
    }, []);

    const loadPac = (id) => {
        navegate('/patient/' + id);
    }

    const loadAll = () => {
        apiInstance.get('services/serlicitas/api/medical-appointments').then(res => {
            setAppintments(res.data);
        });
    }

    return(
        <div>
            <table id="data_person">
                <thead>
                    <tr className="tr_top">
                        <th>Cod. Paciente</th>
                        <th>Area</th>
                        <th>Servicio</th>
                        <th>Tipo de Consulta</th>
                        <th>Tipo de Atención</th>
                        <th>Fecha de Consulta</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((item) =>
                        <tr key={item.patientCode}>
                            <td>{item.patientCode}</td>
                            <td>{item.area.name}</td>
                            <td>{item.servicioSolicitado.name}</td>
                            <td>{item.tipoConsulta.name}</td>
                            <td>{item.tipoAtencion.name}</td>
                            <td>{item.dateAppointment}</td>
                            <td>
                                <button onClick={() => loadPac(item.patientCode)}>Detalle</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>

        </div>
    )
}