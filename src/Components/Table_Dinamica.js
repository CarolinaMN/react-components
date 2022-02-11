import React, {Component} from "react";
import axios from 'axios';

export default class Table extends Component{
    constructor(){ 
        super()
        this.state = {
            data : []
        }
    }   

    componentDidMount(){
        axios.get('http://localhost:3001/users').then( res => {
            this.setState({
                data: res.data
            })
        });
    }

    render(){
        const addElement = () => {
            
            var dataUser = { id: 4, nombre: 'María', apellido: 'Muñoz', edad: '37'}
            axios.post('http://localhost:3001/users', dataUser).then(res => {
            })
            // let table = this.state.data.slice();
            // table.push({
            //     nombre:'Carlos',
            //     apellido: 'Alcivar',
            //     edad: '27'
            // });
            //this.setState({ data : table});
        };

        const deleteElement = (id) => {
            axios.delete('http://localhost:3001/users/'+id).then(res => {});
            // let table = this.state.data;
            // let newTable = table.filter((e, i) => index != i);
            // this.setState({ data: newTable});
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
                            </td>
                        </tr>
                    )}
                    
                </tbody>
                </table>
                <button onClick={addElement}>Agregar</button>
            </div>
        )
    }
}