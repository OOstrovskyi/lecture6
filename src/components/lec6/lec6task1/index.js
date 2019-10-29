import React, { Component } from "react";

export default class RandomNames extends React.Component{
    constructor(props){
      super(props);
      this.state={
        choos: 'q',
        names: ['Alexey', 'Nikita', 'Walera', 'Taras'],
      }
    }
    
    chooseName = () =>{
      this.setState({choos: this.state.names[Math.floor(Math.random()*this.state.names.length)]});
      console.log('test');
    }
    
    // shouldComponentUpdate(nextProps, nextState) {
    // //   this.chooseName();
    //    return true;
    // }
    
    render(){
      return (
        <div>
          <h1>{this.state.choos}</h1>
          <button onClick={this.chooseName}>Random Name!</button>
        </div> 
      )
    }
    
  }