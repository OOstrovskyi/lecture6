import React, { Component } from "react";
import Header from "./header";
import Form from "./form";
import BookmarkResult from "./BookmarkResult";
import Footer from "./footer";
import "./css/style.css";

export default class Bookmarks extends React.Component{
    constructor(props){
        super(props);
    }

    // saveBookmark(e) {
    //     // Get form values
    //     var siteName = document.getElementById('siteName').value;
    //     var siteUrl = document.getElementById('siteUrl').value;
    
    //     if (!validateForm(siteName, siteUrl)) {
    //         return false;
    //     }
    
    //     var bookmark = {
    //         name: siteName,
    //         url: siteUrl
    //     };
    
    //     /* Local storage test
    //         localStorage.setItem('test', 'HEY BRO');
    //         localStorage.getItem('test');
    //         localStorage.removeItem('test'); 
    //     */
    
    //     // Test if bookmarks is null
    //     if (localStorage.getItem('bookmarks') === null) {
    //         // Init bookmark array
    //         var bookmarks = [];
    
    //         // Add to array
    //         bookmarks.push(bookmark);
    
    //         // Set to LocalStoraget
    //         localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    //     } else {
    //         // Get bookmarks from LocalStorage
    //         var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
    //         // Add bookmarks to array
    //         bookmarks.push(bookmark);
    
    //         // Re-set back to LocalStorage
    //         localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    //     }
    
    //     // Clear form
    //     document.getElementById('myForm').reset();
    
    //     // Re-fetch bookmarks
    //     fetchBookmarks();
        
    //     // Prevent form from submitting
    //     e.preventDefault();
    // }


    render () {
        return(
            <div className="container">
                <Header />
                <Form />
                <BookmarkResult />
                <Footer />
            </div>
        )
    }
}