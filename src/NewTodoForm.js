import React, { Component } from 'react';
import uuid from 'uuid/v4';
export class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', work: '', isEditing: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newbox = { ...this.state, id: uuid() };
    this.props.addBox(newbox);
    this.setState({ id: '', work: '', isEditing: false });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="work">Height:-</label>
          <input name="work" value={this.state.work} onChange={this.handleChange} />
          <button>Todo</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
