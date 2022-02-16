import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import apiInstance from '../axios.interceptor';


export default function MedicalArea(){
    const [ areas, setAreas ] = useState([]);

    useEffect(() => {
        loadAll();
    }, []);

    const loadAll = () => {
        apiInstance.get('services/serlicitas/api/medical-areas').then(res => {
            setAreas(res.data);
        }).catch(() => {
            console.log("Error")
        });
    }

    return(
        <div>
            <table id="data_person">
                <thead>
                    <tr className="tr_top">
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {areas.map((item) =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
} 