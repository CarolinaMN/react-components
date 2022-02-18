import React, { useContext } from 'react';
import { Context } from './Context';


export default function Home() {
    const context = useContext(Context);

    return(
        <div>
            { context.authenticated ? <h1>Sesión Activa</h1> :
                <h1>Sesión Inactiva</h1>
            }
        </div>
    )
}