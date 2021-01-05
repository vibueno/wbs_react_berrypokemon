import React, { useState } from "react";
import "./index.css";
export default function Card({ id, title }) {
  return (
    <div className="card">
      <div className="card-title">
        {id} - {title}
      </div>
    </div>
  );
}
