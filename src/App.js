import React, { Component } from 'react'
import './index.css'
import InputForm from './components/InputForm.js'
import Todo from './components/Todo.js'
import { connect } from 'react-redux'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

class App extends Component {

  handleHome = () => {
    this.props.switchToIndex();
  }

  handleAbout = () => {
    this.props.switchToAbout();
  }

  render() {
    if (this.props.index === true) {
      return (
        <div className="App">
          <div className="body">
            <div className="siteheader" onClick={this.handleHome}>LIST</div>
            <div className="siteheader" onClick={this.handleAbout}>ABOUT</div>
            <Provider store={store}><InputForm /></Provider>
            <br /><br />
            <Provider store={store}><Todo /></Provider>
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
            ENTER or hitting the SAVE button. You can delete a message simply by clicking
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

const mapDispatchToProps = (dispatch) => {
  return {
    switchToIndex: () => { dispatch({type: 'SWITCH_INDEX'})},
    switchToAbout: () => { dispatch({type: 'SWITCH_ABOUT'})}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
