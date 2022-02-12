import React, {Component} from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class Table extends Component{
    constructor(){ 
        super()
        this.state = {
            data : [],
            dataUpdate: false,
            dataAdd: false
        }
    }   

    componentDidMount(){
        this.loadAll();
    }

    loadAll = () => {
        axios.get('http://localhost:3001/users').then( res => {
            this.setState({
                data: res.data,

            })
        });
    }

    render(){
        const addElement = () => {
            this.setState({
                dataAdd : true
            })
        };

        const deleteElement = (id) => {
            axios.delete('http://localhost:3001/users/'+id).then(res => {
                this.loadAll();
            }); 
        }

        const upDateElement = () => {
            this.setState({
                dataUpdate: true
            })
        }

        return (
            <div>
                <table id="data_person">
                <thead>
                    <tr className="tr_top">
                        <th>N°</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((d, index) =>
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.nombre}</td>
                            <td>{d.apellido}</td>
                            <td>{d.edad}</td>
                            <td>
                                <button onClick={() => deleteElement(d.id)}>Eliminar</button>
                                <button onClick={() => upDateElement()}>Editar</button> 
                                {this.state.dataUpdate ? <Navigate to={'/personupdate/'+d.id}></Navigate> : <></>}  
                            </td>
                        </tr>
                    )}
                    
                </tbody>
                </table>
                <button onClick={addElement}>Agregar</button>
                {this.state.dataAdd ? <Navigate to='/personnew'></Navigate> : <></>}  
            </div>
        )
    }
}