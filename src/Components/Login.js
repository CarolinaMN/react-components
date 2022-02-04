import React, {Component, useState} from 'react';
import InPassword from './InPassword';

export default function Login(){
    const [ success, setSuccess ] = useState(false);
    const [ user, setUser ] = useState('');

    const changeData = (d) => {
        setSuccess(d);
    }

    return(
        <div className="login">
            <h2>INICIO DE SESIÓN</h2>
            <form className="formlogin">
                <div>
                    <input  type="text" placeholder="Usuario"></input>
                </div>
                <div>
                    <InPassword onInput={changeData}></InPassword>
                </div>  
                <div>
                    <button className="btn buttonlogin" disabled={success == false ? true : false}>Ingresar</button>
                </div>
            </form>
        </div>
    )

}