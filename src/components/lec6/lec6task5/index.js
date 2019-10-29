
import React, { Component } from "react";
import User from './user.js'

export default class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            isLoading: false,
          };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => this.setState({ posts: data, isLoading: false }));
      }

    render() {
        const { posts, isLoading } = this.state;
        if (isLoading) {
          return <p>Loading ...</p>;
        }
        //console.log(posts);
        return (
          <div>
            {posts.map(hit =>
              //<p>{hit.title}</p>
              <User id={hit.id} title={hit.title} body={hit.body} />
            )}
          </div>
        );
    }
}