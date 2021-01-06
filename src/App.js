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

  const apiRequest = (url, title, stateUpdater) => {
    axios
      .get(url)
      .then((response) => {
        const apiReponse = {
          title: title,
          id: response.data.id,
          name: response.data.name,
        };
        stateUpdater(apiReponse);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    apiRequest("https://pokeapi.co/api/v2/berry/1", "berry", setBerry);
  }, []);

  useEffect(() => {
    apiRequest(
      "https://pokeapi.co/api/v2/berry-firmness/1",
      "firmness",
      setBerryFirmness
    );
  }, []);

  useEffect(() => {
    apiRequest(
      "https://pokeapi.co/api/v2/berry-flavor/1",
      "flavour",
      setBerryFlavour
    );
  }, []);

  useEffect(() => {
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
        {berry ? (
          <Card title={berry.title} id={berry.id} name={berry.name} />
        ) : null}
        {berryFirmness ? (
          <Card
            title={berryFirmness.title}
            id={berryFirmness.id}
            name={berryFirmness.name}
          />
        ) : null}
        {berryFlavour ? (
          <Card
            title={berryFlavour.title}
            id={berryFlavour.id}
            name={berryFlavour.name}
          />
        ) : null}
      </div>

      <BerryForm></BerryForm>

      <h2>Pokemon buddies</h2>
      {pokemonList ? <PokemonList pokemonList={pokemonList} /> : null}
    </>
  );
}

export default App;
