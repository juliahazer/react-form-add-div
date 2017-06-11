import React, { Component } from 'react';
import DivForm from './DivForm';
import './App.css';

/*Create an app with a form that lets you add divs to the page. Inside of the form you should be able to specify the div's width, height, and background color. When you submit the form, the div should show up on the page with the specified style, and the first input on the form should come in to focus.*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      divs: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetView = this.resetView.bind(this);
  }

  handleSubmit(width, height, color) {
    var divs = this.state.divs.slice();
    var newId;
    if (divs.length < 1){
      newId = 1;
    } else {
      newId = divs[divs.length-1].id;
      newId++;
    }
    divs.push({
      id: newId,
      width: Number(width),
      height: Number(height),
      color: color
    })
    console.log(divs)
    this.setState({divs});
  }

  resetView(){
    var divs = [];
    this.setState({divs});
  }

  render() {
    var divs = this.state.divs.map((el) => {
      var style = {
        width: el.width,
        height: el.height,
        backgroundColor: el.color,
        display: 'inline-block'
      };
      return <div key={el.id} style={style}></div>
    });
    return (
      <div className="App">
        <DivForm key="1" 
          processForm={this.handleSubmit}
          resetView={this.resetView} 
          color='black'
        />
        {divs}
      </div>
    );
  }
}

export default App;
