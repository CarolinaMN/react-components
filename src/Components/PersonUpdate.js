import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PersonUpdate() {
    const [ person, setPerson ] = useState({
        id: '',
        nombre: '',
        apellido: '',
        edad: ''
    });

    const navegate = useNavigate();

    useEffect(() => {
        loadUser(1);
    })

    const loadData = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setPerson({
            ...person,
            [name]: value
        })
    }

    const save = () => {
        axios.put('http://localhost:3001/users/1', person).then(() => {
            navegate('/tabla');
        });
    }

    const loadUser = (id) => {
        axios.get('http://localhost:3001/users/'+id).then(res => {
            setPerson(res.data);
        })
    }

    return(
        <div>
            <h2> Editar Usuario</h2>
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