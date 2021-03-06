//lecture 6, task 4
import React, { Component } from "react";

export default class Generator extends React.Component{
    constructor(props){
      super(props);
      this.state={
            min : props.min,
            max : props.max,
            randomNumber : 0,
            generated : false,
      }
    }

    generate = () => {
        this.setState({randomNumber: Math.floor(Math.random()*(1+this.state.max-this.state.min)+this.state.min)});
        this.setState({generated: true});
    }

    shouldComponentUpdate(nextProps, nextState){
      if (nextState.randomNumber % 2 !== 0)
        return false;
      else
        return true;
    }

    render(){
        return (
          <div>
            <p>
                Random number between {this.state.min} and {this.state.max} is {' '}
                {this.state.generated ? (this.state.randomNumber) : 'not generated yet' }
            </p>
            <button onClick={this.generate}>Generate!</button>
          </div> 
        )
      }
}