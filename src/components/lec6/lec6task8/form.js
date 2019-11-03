import React, { Component } from "react";

export default class Form extends React.Component{
    constructor(props){
        super(props);
    }

    render () {
        return(
            <div className="jumbotron">
            <h2>Bookmark your favorite Sites</h2>
    
            <form id="myForm" action="">
                <div className="form-group">
                    <label htmlFor="">Site Name</label>
                    <input type="text" className="form-control" id="siteName" placeholder="Website Name" />
                </div>
    
                <div className="form-group">
                        <label htmlFor="">Site URL</label>
                        <input type="text" className="form-control" id="siteUrl" placeholder="Website URL" />
                </div>
    
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        )
    }
}