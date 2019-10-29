import React from "react";
import "./user.css";

export default function User(props) {
  // Get the data passed in from the props
  // Use it in this component

  return (
    <div className="user">
      <p>
        <strong>Id: </strong>
        {props.id}
      </p>
      <p>
        <strong>Title: </strong>
        {props.title}
      </p>
      <p>
        <strong>Body: </strong>
        {props.body}
      </p>
    </div>
  );
}