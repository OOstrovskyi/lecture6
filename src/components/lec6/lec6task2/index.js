//lecture 6, tasks 2 and 3
import React, { Component } from "react";

export default class ToDo extends React.Component{
    constructor(props){
      super(props);
      this.state={
            value : '',
            tasks : [],
      }
    }
    
    onChangeValue = event => {
      this.setState({ value: event.target.value });
    };

    onAddItem = () => {
      this.setState(state => {
        const tasks = state.tasks.concat(state.value);
        return {
          tasks,
          value: '',
        };
      });
    };

    onRemoveItem = i => {
      this.setState(state => {
        const tasks = state.tasks.filter((item, j) => i !== j);
        return {
          tasks,
        };
      });
    };
    
    render(){
      return (
        <div>
          <ul>
            {this.state.tasks.map( (item, index) => (
              <li key={item} onClick={() => this.onRemoveItem(index)}>{item}</li>
            ))}
          </ul>
            
          <input type="text" value={this.state.value} onChange={this.onChangeValue}/>

          <button type="button" onClick={this.onAddItem} disabled={!this.state.value}>
            Add
          </button>
        </div> 
      )
    }
    
  }