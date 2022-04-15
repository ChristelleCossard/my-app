import React, { Component } from 'react';

 class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          content: ''
        };

        this.handleInput = (event) => {
            this.setState({ ...this.state, [event.target.id]: event.target.value })
          };
      };

  render() {
    return (
    <>
      <div className="input-wrapper">
        <label htmlFor="title">Titre du message</label>
        <input id="title" value={this.state.title}
        onChange={this.handleInput}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="content">Contenu du message</label>
        <textarea id="content"
        value={this.state.content}
        onChange={this.handleInput}
        ></textarea>
      </div>
      <div className="input-wrapper">
        <button type="button">Envoyer le message</button>
      </div>
    </>
    );
  };
};
export default ContactForm;