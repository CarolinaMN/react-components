import React, {Component} from "react";

export default class Table extends Component{
    constructor(){ 
        super()
        this.state = {
            data : [
                { 
                  nombre: 'Carolina',
                  apellido: 'Laaz',
                  edad: '23'
                },
                { 
                  nombre: 'Karla',
                  apellido: 'Jaume',
                  edad: '27'
                },
              ]
        }
    }   

 render(){
     const addElement = () => {
        let table = this.state.data.slice();
        table.push({
            nombre:'Carlos',
            apellido: 'Alcivar',
            edad: '27'
        });
        this.setState({ data : table});
     };

     const deleteElement = (index) => {
        let table = this.state.data;
        let newTable = table.filter((e, i) => index != i);
        this.setState({ data: newTable});
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
                    <tr key={d.nombre}>
                        <td>{index}</td>
                        <td>{d.nombre}</td>
                        <td>{d.apellido}</td>
                        <td>{d.edad}</td>
                        <td>
                            <button onClick={() => deleteElement(index)}>Eliminar</button>   
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