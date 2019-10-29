//lecture 6, task 4
import React, { Component } from "react";

export default class Generator extends React.Component{
    constructor(props){
      super(props);
      this.state={
            min : 2,
            max : 14,
            randomNumber : 0,
            generated : false,
      }
    }

    generate = () => {
        this.setState({randomNumber: Math.floor(Math.random()*(1+this.state.max-this.state.min)+this.state.min)});
        this.setState({generated: true});
        //this.setState({randomNumber: Math.random()});
        console.log(this.state.randomNumber);
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