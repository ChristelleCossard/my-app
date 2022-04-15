import { render } from '@testing-library/react';
import React, { Component} from 'react';

class FormInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: 'Jean'
        };
        };

    render(){
    return (
        <div>
        <label>{this.props.label}</label>
        <input 
        type="text" 
        value={this.state.value}
   //     value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={(event) => this.setState({ value: event.target.value })}
        />

        </div>
  );
    };
};

export default FormInput;