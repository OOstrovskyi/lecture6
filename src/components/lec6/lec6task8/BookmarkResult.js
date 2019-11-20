import React from "react";

export default function BookmarkResult({ bookmarks, deleteBookmark }) {
  return (
    <div className="row marketing">
      <div className="col-lg-12">
        <div id="bookmarksResult">
          {bookmarks.map((bookmark, index) =>
            <div key={index} className="well">
              <h3>{bookmark.name}
                <a className="btn btn-default" target="_blank" rel="noopener noreferrer" href={bookmark.url}>Visit</a>
                <a className="btn btn-danger" href="#" onClick={deleteBookmark} name={index}>Delete</a>
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  )

}