import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [berry, setBerry] = useState("");
  const [berryFirmness, setBerryFirmness] = useState("");
  const [berryFlavour, setBerryFlavour] = useState("");

  const [userBerry, setuserBerry] = useState("");

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
        const apiBerryFlavour = {
          category: "flavour",
          id: response.data.id,
          name: response.data.name,
        };
        setBerryFlavour(apiBerryFlavour);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const submitHandler = (e) => {
    const domUserBerry = document.getElementById("user-berry");

    axios
      .get(`https://pokeapi.co/api/v2/berry/${domUserBerry.value}`)
      .then((response) => {
        setuserBerry(response.data.name);
      })
      .catch((error) => {
        setuserBerry("no berry available with the specified id.");
      });

    e.preventDefault();
  };

  return (
    <>
      <h1>Welcome to Berryland!</h1>
      <div className="card-container">
        <Card berryInfo={berry}></Card>
        <Card berryInfo={berryFirmness}></Card>
        <Card berryInfo={berryFlavour}></Card>
      </div>
      <form onSubmit={submitHandler}>
        <input
          id="user-berry"
          type="text"
          placeholder="Enter a berry id..."
        ></input>
        <button type="submit">get!</button>
      </form>
      <div className="returned-berry">
        <strong>Your berry:&nbsp;</strong> {userBerry}
      </div>
    </>
  );
}

export default App;
