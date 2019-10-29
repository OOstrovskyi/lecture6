
import React, { Component } from "react";
import "./gallery.css";

export default class Gallery extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            isLoading: false,
            error: null,
            currentImg: 0,
          };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://picsum.photos/v2/list?page=2&limit=1000')
          .then(response => response.json())
          .then(data => this.setState({ posts: data, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
          console.log('componentDidMount');
      }

    prevImg = () => {
        if (this.state.currentImg !==0)
            this.setState({currentImg: --this.state.currentImg});
        console.log('PrevImg', this.state.currentImg)
    }


    nextImg = () => {
        if (this.state.currentImg !==9)
            this.setState({currentImg: ++this.state.currentImg});
        console.log('NextImg', this.state.currentImg)
        
    }

    render() {
        const { posts, isLoading, error, currentImg } = this.state;
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

        console.log('render', currentImg)

        if (posts.length>0) return (
            <div>
                <img src={posts[currentImg].download_url} />
                <p>{posts[currentImg].id}</p>
                <button onClick={this.prevImg}>Previous image</button>
                <button onClick={this.nextImg}>Next image</button>
            </div>
        ); else return <p>Loading ...</p>;
        
    }
}