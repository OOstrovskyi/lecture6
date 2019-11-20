import React from "react";
import Header from "./header";
import Form from "./form";
import BookmarkResult from "./BookmarkResult";
import Footer from "./footer";
import "./css/style.css";

export default class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [] && JSON.parse(localStorage.getItem('bookmarks')),
      bookmark: { name: '', url: '' },
      siteName: '',
      siteUrl: ''
    }
  }

  validateForm = (siteName, siteUrl) => {
    if (!siteName || !siteUrl) {
      alert('Please fill the form');
      return false;
    }

    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
      alert('Please use a valid url');
      return false;
    }

    return true;
  }

  saveBookmark = (event) => {
    // Get form values
    const { siteName, siteUrl } = this.state;


    if (!this.validateForm(siteName, siteUrl)) {
      return false;
    }

    let bookmark = {
      name: siteName,
      url: siteUrl
    };

    let bookmarks = [];

    // Test if bookmarks is null
    if (localStorage.getItem('bookmarks') === null) {
      // Init bookmark array
      bookmarks = [];

      // Add to array
      bookmarks.push(bookmark);

      // Set to LocalStoraget
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
      // Get bookmarks from LocalStorage
      bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

      // Add bookmarks to array
      bookmarks.push(bookmark);

      // Re-set back to LocalStorage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    // Clear form
    this.setState({ siteName: '', siteUrl: '' });

    // Re-fetch bookmarks
    this.setState({ bookmarks: bookmarks });

    // Prevent form from submitting
    event.preventDefault();
  }

  changeSiteName = (event) => {
    this.setState({ siteName: event.target.value });
  }

  changeUrl = (event) => {
    this.setState({ siteUrl: event.target.value });
  }

  deleteBookmark = (event) => {
    console.log(event.target.name);
    // Get bookmarks from LocalStorage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Loop through bookmarks
    for (let i = 0; i < bookmarks.length; i++) {
      if (i === Number(event.target.name)) {
        // Remove from array
        bookmarks.splice(i, 1);
      }
    }

    // Re-set back to LocalStorage // Re-fetch bookmarks
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    this.setState({ bookmarks: bookmarks });
  }

  render() {
    const { siteName, siteUrl, bookmarks } = this.state;
    return (
      <div className="container">
        <Header />
        <Form siteName={siteName} siteUrl={siteUrl}
          changeSiteName={this.changeSiteName} changeUrl={this.changeUrl} submitForm={this.saveBookmark} />
        <BookmarkResult bookmarks={bookmarks} deleteBookmark={this.deleteBookmark} />
        <Footer />
      </div>
    )
  }
}