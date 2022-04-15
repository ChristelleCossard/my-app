import React, { Component } from 'react';
import './Modal.css';

 class Modal extends Component {
  render(){
    return (
      <div className="modal-wrapper">
        <h2>{this.props.title}</h2>
        <div className="modal-content">
        {this.props.children}
        </div>
      </div>
    );
  };
};

export default Modal;