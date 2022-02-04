import React, {Component} from "react";

export default class Table extends Component{
    constructor(){ 
        super()
        this.state = {
            title : "Es un estado"
        }
    }

 render(){
    const upDateText = () => {
        this.setState({title : "El estado cambio"})
    };
     return (
         <div>
            <h1 onClick={upDateText}>{this.state.title}</h1>

             <table id="data_person">
               <thead>
                   <tr className="tr_top">
                       <th>Nombre</th>
                       <th>Apellido</th>
                       <th>Edad</th>
                   </tr>
               </thead>
               <tbody>
                   {this.props.data.map((d) =>
                    <tr key={d.nombre}>
                        <td>{d.nombre}</td>
                        <td>{d.apellido}</td>
                        <td>{d.edad}</td>
                    </tr>
                   )}
                   
               </tbody>
             </table>
         </div>
     )
 }
}