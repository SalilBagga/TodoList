import React, { Component } from 'react';
import uuid from 'uuid/v4';

export class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', work: '', isEditing: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newevent = { ...this.state, id: uuid() };
    this.props.addevent(newevent);
    this.setState({ work: '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="work">Work:-</label>
          <input
            name="work"
            value={this.state.work}
            onChange={this.handleChange}
            placeholder="add new task"
          />
          <button>Todo</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
