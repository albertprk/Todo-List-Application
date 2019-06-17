import React, {Component} from 'react';
import { connect } from 'react-redux';

class InputForm extends Component {

    handleChange = (event) => {
      this.props.changeText(event.target.value);
    }

    handleSubmit = (event) => {
      event.preventDefault();
      let todoText = this.props.text;
      let todoID = this.props.size + 1;
      this.props.addTodo(todoText, todoID);
    }

    render() {
        return (
          <div id="tasklist" className="tasklist">
              <form id="InputForm" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  autoComplete="off"
                  id="textform"
                  onChange={this.handleChange}
                  placeholder="Leave a message for yourself"
                  value={this.props.text}
                />
                <button className="button">Save</button>
              <br />
              <br />
            </form>
          </div>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeText: (text) => { dispatch({type: 'UPDATE_TEXT', text: text})},
    addTodo: (todo, id) => { dispatch({type: 'ADD_TODO', todo: todo, id: id})}
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text,
    size: state.size
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm)
