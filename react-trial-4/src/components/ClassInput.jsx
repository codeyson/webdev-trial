// Class based component

import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
      count: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCount = this.handleCount.bind(this);
  }

  handleCount() {
    this.setState((state) => ({
      count: state.count + 1
    }))
  }
  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

handleDelete(todoToDelete) {
  this.setState((state) => ({
    todos: state.todos.filter((todo) => todo !== todoToDelete),
    count: state.count - 1
  }));
}


 handleSubmit(e) {
    e.preventDefault();
    if (this.state.inputVal.trim() === "") return; // prevent empty todos
    this.setState(
      (state) => ({
        todos: state.todos.concat(state.inputVal),
        inputVal: "",
        count: state.count + 1
      }),
    );
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            id="task-entry"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>

        </form>

        <h4>All the tasks!</h4> 
        <h4 onChange= {this.handleCount}>Count: {this.state.count}</h4>
        <ul>
        {this.state.todos.map((todo) => (
            <li key={todo}>
            {todo}{" "}
            <button onClick={() => this.handleDelete(todo)}>Delete</button>
            </li>
        ))}
        </ul>

      </section>
    );
  }
}

export default ClassInput;
