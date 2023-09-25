import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  uniqueId = nanoid();

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.setState(prevState => {
      prevState.contacts.push({
        id: nanoid(),
        name: prevState.name,
        number: prevState.number,
      });
    });

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form className="form-contact" onSubmit={this.handleSubmitForm}>
          <label className="label-contact">
            Name
            <input
              type="text"
              name="name"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label className="label-contact">
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>
          <button className="btn-submit" type="submit">
            Add Contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(el => {
            return <li key={nanoid()}>{`${el.name} - ${el.number}`}</li>;
          })}
        </ul>
      </div>
    );
  }
}
