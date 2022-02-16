import React, { useEffect, useState } from 'react';
import apiInstance from '../axios.interceptor';
import { useParams } from 'react-router-dom';

export default function DetailMedical() {
    const [ dataP, setDataP] = useState({
        patientCode: '',
        area: '',
        servicioSolicitado: '',
        tipoConsulta: '',
        tipoAtencion: '',
        descripcionMotivo: '',
        cuadroClinico: '',
        requestedDate: '',
        dateAppointment: '',
        appointmentChannel: ''
    });

    const params = useParams();

    useEffect(() => {
        loadAll();
    });

    const loadAll = () => {
        apiInstance.get('services/serlicitas/api/medical-appointments/' + params.id).then(res => {
            setDataP(res.data);
        })
    }


    return(
        <div>
            <h2>
                Paciente: { dataP.patientCode }
            </h2>
            <div>
                <label>Area: { dataP.area.name }</label>
            </div>
            <div>
                <label>Servicio solicitado: { dataP.servicioSolicitado.name }</label>
            </div>
            <div>
                <label>Tipo de consulta: { dataP.tipoConsulta.name }</label>
            </div>
            <div>
                <label>Tipo de atencion: { dataP.tipoAtencion.name }</label>
            </div>
            <div>
                <label>Motivo: { dataP.descripcionMotivo }</label>
            </div>
            <div>
            <label>Cuadro clinico: { dataP.cuadroClinico }</label>
            </div>
            <div>
            <label>Fecha de creación: { dataP.requestedDate }</label>
            </div>
            <div>
            <label>Fecha de consulta: { dataP.dateAppointment }</label>
            </div>
            <div>
            <label>Canal: { dataP.appointmentChannel.name }</label>
            </div>       
            
            
        </div>
    )
}