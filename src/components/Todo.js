import React, { Component } from "react";
import { connect } from 'react-redux'

class Todo extends Component {

    handleClick = (id) => {
      this.props.deleteTodo(id);
    }

    render() {
      const todoList =  this.props.todos.length ? (
      this.props.todos.map(todoEntry => {
        return (
          <div className="todoEntry" key={todoEntry.id}>
                <div onClick={() => {this.handleClick(todoEntry.id)}}>
                  <p>
                {todoEntry.todo}
                  </p>
                </div>

          </div>
        )
      })
    ) : (
      <div className="emptyTodo">
        <p>Your list is empty</p>
      </div>
    );

    return (
      <div className="todoList">
         { todoList }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => { dispatch({type: 'DELETE_POST', id: id})}
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    size: state.size,
    index: state.index,
    showPopUp: state.showPopUp
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
