const initState = {
  todos: [
    {todo: "Cook dinner", description:"Burgers and fries", id: 1, show:true},
    {todo: "Do laundry", description:"Yup", id: 2, show:true}
  ],
  index: true,
  size: 2,
  showPopUp: true,
  text: "",
}

const rootReducer = (state = initState, action) => {
  console.log(action)

  if (action.type === 'SWITCH_ABOUT') {
    return {
      ...state,
      index: false
    }
  }

  if (action.type === 'SWITCH_INDEX') {
    return {
      ...state,
      index: true
    }
  }

  if (action.type === 'ADD_TODO') {
    let newTodo = {todo: action.todo, id: action.id, description: ""};
    return {
      ...state,
      todos: state.todos.concat(newTodo),
      size: state.size + 1
    }
  }

  if (action.type === 'UPDATE_TEXT') {
    let newText = action.text;
    return {
      ...state,
      text: newText
    }
  }

  if (action.type === 'DELETE_POST') {
    let newTodos = state.todos.filter(todoEntry => {
      return action.id !== todoEntry.id
    })

    return {
      ...state,
      todos: newTodos
    }
  }
  return state;
}

export default rootReducer
