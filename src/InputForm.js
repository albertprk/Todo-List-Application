import React, {Component} from 'react';

class InputForm extends Component {
  state = {
    text: ""
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  }

  clearform = e => {
    this.setState({
      text: e.target.value
    });
  }

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo({todo: this.state.text, description: "", id: this.props.size + 1, show:true});
    this.setState({
      text: ""
    });
  }

  render() {
      return (
        <div id="tasklist" className="tasklist">
            <form id="InputForm" onSubmit={this.addTodo}>
              <input
                type="text"
                autoComplete="off"
                id="textform"
                onChange={this.handleChange}
                placeholder="Leave a message for yourself"
                value={this.text}
                onSubmit={this.clearform}
              />
              <button className="button">Save</button>
            <br />
            <br />
          </form>
        </div>)
  }
}

export default InputForm;
