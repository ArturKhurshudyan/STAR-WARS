import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Ship = () => {
  const [shipData, setShipData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const fetchShipData = () => {
    fetch(`https://swapi.dev/api/starships/${id}/`)
      .then((response) => response.json())
      .then((json) => setShipData(json));
  };

  function handleClick() {
    navigate("/");
  }

  useEffect(() => {
    fetchShipData();
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      <button className="button" onClick={handleClick}>
        ◄
      </button>

      <h2 className="title">Ship</h2>
      <div className="ship_description">
        <span>Model: {shipData.model}</span>
        <span>Name: {shipData.name}</span>
        <span>Passengers: {shipData.passengers}</span>
      </div>
    </>
  );
};