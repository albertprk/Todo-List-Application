import React, { Component } from 'react'
import './index.css'
import InputForm from './InputForm.js'
import Todo from './Todo.js';

class App extends Component {
  state = {
    todos: [
      {todo: "Finish this project", description:"", id:1, show:true},
      {todo: "Complete BCS program", description:"", id:2, show:true}
    ]
  }

  addTodo = todo => {
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="body">
          <InputForm addTodo={this.addTodo} />
          <Todo todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
