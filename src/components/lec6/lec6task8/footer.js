import React, { Component } from "react";

export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render () {
        return(
            <footer className="footer">
                <p>&copy; 2019 Bookmarker, Inc. | Developed by Rotimi Best</p>
            </footer>
        )
    }
}