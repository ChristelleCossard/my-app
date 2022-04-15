import React, { Component } from 'react';
import './Card.css';


 class Card extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <img
          className="picture"
          src={this.props.picture}
          alt="user"
        />
        <div className="card-content">
          <span className="name">{this.props.name} - {this.props.age}</span>
          <span className="city">{this.props.city}</span>
        </div>
      </div>
    );
  };
};

export default Card;