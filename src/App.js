import React, { Component } from 'react'
import './index.css'
import InputForm from './InputForm.js'
import Todo from './Todo.js';
import Popup from "./Popup.js"

class App extends Component {
  state = {
    todos: [
      {todo: "Cook dinner", description:"Burgers and fries", id: 1, show:true},
      {todo: "Do laundry", description:"Yup", id: 2, show:true}
    ],
    index: true,
    size: 2,
    showPopUp: true,
    description: ""
  }

  addTodo = todo => {
    this.setState({
      todos: this.state.todos.concat(todo),
      size: this.state.size + 1
    })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({todos})
  }

  handleHover = (description) => {
    this.setState({
      description,
      showPopUp: true
    })
  }

  handleHome = e => {
    this.setState({
      index: true
    })
  }

  handleAbout = e => {
    this.setState({
      index: false
    })
  }

  render() {
    if (this.state.index === true) {
      return (
        <div className="App">
          <div className="body">
            <div className="siteheader">LIST</div>
            <div className="siteheader" onClick={this.handleAbout}>ABOUT</div>
            <InputForm addTodo={this.addTodo} size={this.state.size} />
            <br /><br />
            <Todo todos={this.state.todos}
              deleteTodo={this.deleteTodo}
              handleHover={this.handleHover}/>

              {this.state.showPopup ?
              <Popup text='Click "Close Button" to hide popup' />
              : null}

            </div>
          </div>
    );} else {
      return (
        <div className="App">
          <div className="body">
            <div className="siteheader" onClick={this.handleHome}>LIST</div>
            <div className="siteheader" onClick={this.handleAbout}>ABOUT</div>
          </div>
          <div className="about">
            <center><div className="siteheader">WELCOME, GUEST</div></center> <br /> <br />This simple list application was
            developed using React.js and Redux. It takes messages from
            you and stores them for you to remember later.
            <br /><br />
            Try it out by typing in a message! Add it to your list by pressing
            enter or hitting the SAVE button. You can delete a message simply by clicking
            on it.
            <br /><br />
            Developed largely through the aid of tutorials from the Net Ninja
            Youtube channel. Check out the React / Redux tutorials below!
            <br/><br /><br />
            <center>
              <a href="www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG">Net Ninja React (w/ Redux) tutorials</a>
            <br />
            <br /><br/>
            The background was custom-made by me, in Photoshop, for this application!
            </center>
          </div>
          <br />
        </div>
      )
    }
  }
}

export default App;
