import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import BerryForm from "./components/BerryForm";
import PokemonList from "./components/PokemonList";

function App() {
  const [berry, setBerry] = useState();
  const [berryFirmness, setBerryFirmness] = useState();
  const [berryFlavour, setBerryFlavour] = useState();
  const [pokemonList, setPokemonList] = useState();

  document.title = "Pokemoon & Berryland";

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/berry/1")
      .then((response) => {
        const apiBerry = {
          category: "berry",
          id: response.data.id,
          name: response.data.name,
        };
        setBerry(apiBerry);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://pokeapi.co/api/v2/berry-firmness/1")
      .then((response) => {
        const apiBerryFirmness = {
          category: "firmness",
          id: response.data.id,
          name: response.data.name,
        };
        setBerryFirmness(apiBerryFirmness);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://pokeapi.co/api/v2/berry-flavor/1")
      .then((response) => {
        const apiResponseBerryFlavour = {
          category: "flavour",
          id: response.data.id,
          name: response.data.name,
        };
        setBerryFlavour(apiResponseBerryFlavour);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(" https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Welcome to Pokemoon & Berryland!</h1>
      <div className="card-container">
        {berry ? <Card berryInfo={berry} /> : null}
        {berryFirmness ? <Card berryInfo={berryFirmness} /> : null}
        {berryFlavour ? <Card berryInfo={berryFlavour} /> : null}
      </div>

      <BerryForm></BerryForm>

      <h2>Pokemon buddies</h2>
      {pokemonList ? <PokemonList pokemonList={pokemonList} /> : null}
    </>
  );
}

export default App;
