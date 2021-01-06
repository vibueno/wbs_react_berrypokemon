import React from "react";
import "./index.css";
export default function Card({ title, id, name }) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-content">
        <div className="card-content-item">
          <strong>Id: </strong> {id}
        </div>
        <div className="card-content-item">
          <strong>Name: </strong>
          {name}
        </div>
      </div>
    </div>
  );
}
