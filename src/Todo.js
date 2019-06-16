import React from "react";
import Popup from "reactjs-popup";

const Todo = ({todos, deleteTodo, handleHover}) => {

    const todoList =  todos.length ? (
      todos.map(todoEntry => {
        return (
          <div className="todoEntry" key={todoEntry.id}>
              <p>
                <div onHover={() => { handleHover(todoEntry.description) }}
                     onClick={() => { deleteTodo(todoEntry.id) } }>
                {todoEntry.todo}
                </div>
              </p>
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

export default Todo;
