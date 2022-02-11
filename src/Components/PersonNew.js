import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PersonNew() {
    const [ person, setPerson ] = useState({
        id: '',
        nombre: '',
        apellido: '',
        edad: ''
    });

    const navegate = useNavigate();

    const loadData = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setPerson({
            ...person,
            [name]: value
        })
    }

    const save = () => {
        setPerson({...person, id: '1'})
        axios.post('http://localhost:3001/users', person).then(() => {
            navegate('/tabla');
        });
    }

    return(
        <div>
            <h2> Crear Usuario</h2>
            <form>
                <div>
                    <label>Nombre</label>
                    <input value={person.nombre} type="text" onChange={loadData} placeholder="Nombre" name="nombre"></input>
                </div>
                <div>
                    <label>Apellido</label>
                    <input value={person.apellido} type="text" onChange={loadData} placeholder="Apellido" name="apellido"></input>
                </div>
                <div>
                    <label>Edad</label>
                    <input value={person.edad} type="text" onChange={loadData} placeholder="Edad" name="edad"></input>
                </div>
            </form>
            <button type="button" onClick={save}>Guardar</button>
        </div>
    )
}