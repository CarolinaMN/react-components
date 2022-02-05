import React, {Component, useState} from 'react';
import invisible from '../Style/images/001-invisible.svg';
import visibility from '../Style/images/002-visibility.svg';

export default function InPassword(props){
    const [ show, setShow ] = useState(false);
    const [ passSuccess, setPassSuccess ] = useState(false);
    const [ valuePass, setValuePass] = useState('');
    
    const imageChange  = () => {
        setShow(!show);
        setPassSuccess(false);
    }

    const inputData = (e) => {
        var count = e.target.value.length;
        if (count > 5) {
            setPassSuccess(true)
            props.onInput(passSuccess);
        }
    }

    const changePass = (e) => {
        setValuePass(e.target.value);
        props.onChange(e.target.value);
    }

    return(
        <div className="comppass">
            <input placeholder="Contraseña" 
            value={valuePass}
            onChange={(e) => changePass(e)}
            type={show == true ? 'text':'password'} onInput={(e) => inputData(e)}></input>
            <img src={show == true ? visibility : invisible}
            width="30"
            height="30"
            className="imagepass"
            onClick={imageChange}
            >
            </img>
        </div>
    )
}