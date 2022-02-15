import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';


export default function Appointments(){
    const [appointments, setAppintments] = useState([]);
    const navegate = useNavigate();

    useEffect(() => {
        this.loadAll();
    })

    const loadPac = (id) => {
        navegate('/detail-medical' + id);
    }

    const loadAll = () => {
        
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
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((item) =>
                        <tr key={item.patientCode}>
                            <td onClick={loadPac(item.patientCode)}>{item.patientCode}</td>
                            <td>{item.area.name}</td>
                            <td>{item.servicioSolicitado.name}</td>
                            <td>{item.tipoConsulta.name}</td>
                            <td>{item.tipoAtencion.name}</td>
                            <td>{item.dateAppointment}</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>

        </div>
    )
}