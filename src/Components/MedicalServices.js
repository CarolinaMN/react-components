import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiInstance from '../axios.interceptor';


export default function MedicalServices() {
    const [ services, setServices ] = useState([]);
    const [ areas, setAreas ] = useState([]);
    const [ areaSelected, setAreaSelected ] = useState('');

    useEffect(() => {
        loadAll();
        loadAreas();
    }, []);

    const loadAll = () => {
        apiInstance.get('services/serlicitas/api/medical-services').then(res => {
            setServices(res.data);
        }).catch(() => {
        });
    };

    const loadAreas = () => {
        apiInstance.get('services/serlicitas/api/medical-areas').then(res => {
            setAreas(res.data);
        })
    }

    const changeArea = (e) => {
        setAreaSelected(e.target.value);
        if (e.target.value !== '') {
            loadDataArea();
        } else {
            loadAll();
        }
    }

    const loadDataArea = () => {
        apiInstance.get('services/serlicitas/api/medical-services/area/' + areaSelected).then(res => {
            setServices(res.data);
        });
    }

    return(
        <div>
            <div>
                <select value={areaSelected} onChange={e => changeArea(e)}>
                    <option value="">Todos</option>
                    {areas.map((option) => 
                        <option value={option.id}>{option.name}</option>
                    )}
                </select>
            </div>

            <table id="data_person">
                <thead>
                    <tr className="tr_top"> 
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