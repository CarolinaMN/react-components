import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Catalogs() {
    const [catalogs, setCatalogs ] = useState([]);

    useEffect(() => {
        loadAll();
    }, []);

    const loadAll = () => {
        axios.get('http://45.79.170.253:8080/services/serlicitas/api/medical-catalogs').then(res => {
            setCatalogs(res.data);
        }).catch(() => {
            console.log("Error")
        });
    }

    return(
        <div>
            <table id="data_person">
                <thead>
                    <tr className="tr_top">
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {catalogs.map((item) =>
                        <tr key={item.id}>
                            <td>{item.catalogCode}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.status}</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )


}