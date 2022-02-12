import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function MedicalArea(){
    const [ areas, setAreas ] = useState([]);

    useEffect(() => {
        loadAll();
    }, []);

    const loadAll = () => {
        axios.get('http://45.79.170.253:8080/services/serlicitas/api/medical-areas').then(res => {
            setAreas(res.data);
        }).catch(() => {
            console.log("Error")
        });
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
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