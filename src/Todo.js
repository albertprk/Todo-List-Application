import React from "react";

const Todo = (props) => {
    const { todos } = props;

    const todoList = todos.map(todoEntry => {
      if (todoEntry.show == true)
        return (
          <div class="todoEntry" key={todoEntry.id}>
              {todoEntry.todo}
          </div>
        );
    });

    return (
      <div className="todoList">
        { todoList }
      </div>
    );
}

export default Todo;
