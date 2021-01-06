import React, { useState, useRef } from "react";
import axios from "axios";
import "./index.css";
export default function BerryForm() {
  const [userBerry, setuserBerry] = useState();

  const userBerryForm = useRef(null);
  const userBerryInput = useRef(null);

  const submitHandler = (e) => {
    const userBerry = userBerryInput.current.value;

    axios
      .get(`https://pokeapi.co/api/v2/berry/${userBerry}`)
      .then((response) => {
        setuserBerry(response.data.name);
      })
      .catch((error) => {
        setuserBerry("no berry available with the specified id.");
      });
    userBerryForm.current.reset();

    e.preventDefault();
  };

  return (
    <>
      <form ref={userBerryForm} onSubmit={submitHandler}>
        <input
          ref={userBerryInput}
          id="user-berry"
          type="text"
          placeholder="Enter a berry id..."
          required
        ></input>
        <button type="submit">get berry!</button>
      </form>
      <div className="returned-berry">
        <strong>{userBerry ? `Your berry: ${userBerry}` : ""}</strong>
      </div>
    </>
  );
}
