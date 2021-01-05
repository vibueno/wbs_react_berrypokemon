import React from "react";
import "./index.css";
export default function Card({ pokemonList }) {
  return (
    <>
      <ul className="pokemon-list">
        {Object.keys(pokemonList).map((key, index) => {
          return <li key={key}>{pokemonList[index].name}</li>;
        })}
      </ul>
    </>
  );
}
