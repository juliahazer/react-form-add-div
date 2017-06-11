import React, { Component } from 'react';

/*Create an app with a form that lets you add divs to the page. Inside of the form you should be able to specify the div's width, height, and background color. When you submit the form, the div should show up on the page with the specified style, and the first input on the form should come in to focus.*/

class DivForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: '',
      height: '',
      color: this.props.color
    }
    this.handleChange = this.handleChange.bind(this);
  }

  addFocus() {
    this.input.focus();
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Add a Div:</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.processForm(this.state.width, this.state.height, this.state.color); 
          this.setState({
            width: '',
            height: '',
            color: ''
          })
          this.addFocus();
        }}
        >
          <input
            id="width"
            onChange={this.handleChange}
            ref={el => this.input =el}
            name="width"
            type="number"
            value={this.state.width}
            placeholder="width"
            required>
          </input>
          <input
            id="height"
            onChange={this.handleChange}
            name="height"
            type="number"
            value={this.state.height}
            placeholder="height"
            required>
          </input>
          <input
            id="color"
            onChange={this.handleChange}
            name="color"
            type="color"
            value={this.state.color}
            placeholder="color"
            required>
          </input>
          <input
            type="submit"
            value="Add Div">
          </input>
        </form>
        <button onClick={() => {
          this.props.resetView();
          this.addFocus();
          this.setState({
            width: '',
            height: '',
            color: 'black'
          });
        }}>
          Reset View
        </button>
      </div>
    )
  }
}

export default DivForm;
