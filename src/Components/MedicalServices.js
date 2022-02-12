import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MedicalServices() {
    const [ services, setServices ] = useState([]);

    useEffect(() => {
        loadAll();
    }, []);

    const loadAll = () => {
        axios.get('http://45.79.170.253:8080/services/serlicitas/api/medical-services').then(res => {
            setServices(res.data);
        }).catch(() => {

        });
    };

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Descuento</th>
                        <th>Area</th>
                        <th>Estado</th>

                    </tr>
                </thead>
                <tbody>
                    {services.map((item) =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.descount}</td>
                            <td>{item.Area}</td>
                            <td>{item.status}</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )

}