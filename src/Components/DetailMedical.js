import React, { useEffect, useState } from 'react';

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
    
    return(
        <div>
            <h2>
                Paciente: { dataP.patientCode }
            </h2>
            <label>Area: { dataP.area }</label>
            <label>Servicio solicitado: { dataP.servicioSolicitado }</label>
            <label>Tipo de consulta: { dataP.tipoConsulta }</label>
            <label>Tipo de atencion: { dataP.tipoAtencion }</label>
            <label>Motivo: { dataP.descripcionMotivo }</label>
            <label>Cuadro clinico: { dataP.cuadroClinico }</label>
            <label>Fecha de creación: { dataP.requestedDate }</label>
            <label>Fecha de consulta: { dataP.dateAppointment }</label>
            <label>Canal: { dataP.appointmentChannel }</label>
        </div>
    )
}