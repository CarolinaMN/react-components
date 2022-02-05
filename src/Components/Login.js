import React, {Component, useState} from 'react';
import InPassword from './InPassword';

export default function Login(){
    const [ success, setSuccess ] = useState(false);
    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    const request = () => {
        var data = { userEmail: user,  pass: password };
        console.log(data);
    }

    return(
        <div className="login">
            <h2>INICIO DE SESIÓN</h2>
            <form className="formlogin" >
                <div>
                    <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="Usuario"></input>
                </div>
                <div>
                    <InPassword onInput={(d) => setSuccess(d)} onChange={(pass) => setPassword(pass)}></InPassword>
                </div>
            </form>
            <div>
                <button className="btn buttonlogin" disabled={success == false ? true : false}
                onClick={request}>Ingresar</button>
            </div>
        </div>
    )

}