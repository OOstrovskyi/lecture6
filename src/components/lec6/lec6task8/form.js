import React from "react";

export default function EnterForm({ siteName, siteUrl, changeSiteName, changeUrl, submitForm }) {
  return (
    <div className="jumbotron">
      <h2>Bookmark your favorite Sites</h2>

      <form id="myForm" onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="">Site Name</label>
          <input type="text" className="form-control" id="siteName" placeholder="Website Name"
            value={siteName} onChange={changeSiteName} />
        </div>

        <div className="form-group">
          <label htmlFor="">Site URL</label>
          <input type="text" className="form-control" id="siteUrl" placeholder="Website URL"
            value={siteUrl} onChange={changeUrl} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )

}