
import React, { Component } from "react";


export default class ApiError extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            isLoading: false,
            error: null,
          };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://github.com/kkmkkkkk')
          .then(response => response.json())
          .then(data => this.setState({ posts: data, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
      }

    render() {
        const { posts, isLoading, error } = this.state;
        
        if (error) {
            return (
                <div>
                    <h1>Error :(</h1>
                    <h3>We are working to resolve it</h3>
                    <p>Additional information: {error.message}</p>
                </div>
            )
        }      
        
        if (isLoading) {
          return <p>Loading ...</p>;
        }

        return (
          <div>
            {posts.map(hit =>
              <p>{hit.title}</p>
            )}
          </div>
        );
    }
}