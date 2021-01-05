import React from "react";
import "./index.css";
export default function Card({ berryInfo }) {
  return (
    <div className="card">
      <div className="card-title">{berryInfo.category}</div>
      <div className="card-content">
        <div className="card-content-item">
          <strong>Id: </strong> {berryInfo.id}
        </div>
        <div className="card-content-item">
          <strong>Name: </strong>
          {berryInfo.name}
        </div>
      </div>
    </div>
  );
}
