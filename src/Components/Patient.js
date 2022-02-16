import React, { useState, useEffect } from 'react';
import apiInstance from '../axios.interceptor';
import { useParams, useNavigate } from 'react-router-dom';

export default function Patient(){
    const [ appointPatient, setAppointPatient ]  = useState([]);
    const params = useParams();
    const navegate = useNavigate();

    useEffect(() => {
        loadAll();
    }, []);

    const loadAll = () => {
        apiInstance.get('services/serlicitas/api/medical-appointments/appointments/'+ params.id +'/patient').then(res => {
            setAppointPatient(res.data);
        }).catch(() => {
            console.log("Error")
        });
    }

    const loadDetail = (id) => {
        navegate('/detail-medical/' + id)
    }
    
return(
    <div>
    <table id="data_person">
            <thead>
                <tr className="tr_top">
                    <th>Area</th>
                    <th>Descripción</th>
                    <th>Tipo de consulta</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {appointPatient.map((item) =>
                    <tr key={item.id}>
                        <td>{item.area.name}</td>
                        <td>{item.descripcionMotivo}</td>
                        <td>{item.tipoConsulta.name}</td>
                        <td>
                            <button onClick={() => loadDetail(item.id)} >Detalle</button>
                        </td>
                    </tr>
                )}
                
            </tbody>
        </table>
    </div>
)
}