import React, {Component} from 'react';
import invisible from '../Style/images/001-invisible.svg';
import visibility from '../Style/images/002-visibility.svg';

export default class InPassword extends Component{
    constructor(){
        super()
        this.state = {
            show : false
        }
    }
    
    
    imageChange  = () => {
        this.setState({
            show: !this.state.show,
            passSuccess: false
        })
    }

    inputData = (e) => {
        var count = e.target.value.length;
        if (count > 5) {
            this.setState({
                passSuccess: true
            })
            this.props.onInput(this.state.passSuccess);
        }
    }
    render(){
        
        return(
            <div className="comppass">
             <input placeholder="Contraseña" type={this.state.show == true ? 'text':'password'} onInput={(e) => this.inputData(e)}></input>
             <img src={this.state.show == true ? visibility : invisible}
                width="30"
                height="30"
                className="imagepass"
                onClick={this.imageChange}
                >
             </img>
            </div>
        )
    }
}