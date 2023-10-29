import React, { Component } from "react";

class CalculatorResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            result : 0,
        };
    };

    calculate = () => {
        const result = this.props.num1 + this.props.num2;
        this.setState({result})
    }

    render() {
        return(
            <div>
                <button onClick={this.calculate}>Calculate</button>
                <h4>Result: {this.state.result}</h4>
            </div>
        )
    }
}

export default CalculatorResult