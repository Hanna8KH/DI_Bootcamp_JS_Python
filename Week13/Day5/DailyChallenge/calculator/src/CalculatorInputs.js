import React, { Component } from 'react';
import './App.css';

class CalculatorInputs extends Component {
  constructor(props){
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: '',
    };
  };

  handleNum1 = (e) => {
    this.setState({ num1: e.target.value })
  };  

  handleNum2 = (e) => {
    this.setState({ num2: e.target.value })
  };

  render() {
    return (
      <div>
        <input type='number' value={this.state.num1} onChange={this.handleNum1}/>
        <input type='number' value={this.state.num2} onChange={this.handleNum2}/>
      </div>
    )
  }

}

export default CalculatorInputs;
