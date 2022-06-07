import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [movieData, setMovieData] = useState({});

  const fetchData = () => {
    fetch("https://swapi.dev/api/films/1/")
      .then((response) => response.json())
      .then((json) => setMovieData(json));
  };

  const starShipsList = movieData.starships?.map((url, index) => (
    <li key={index}>
      <Link to={url}>{url}</Link>
    </li>
  ));

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h2 className="title">{movieData.title}</h2>
      <p className="description">{movieData.opening_crawl}</p>
      <ul>{starShipsList}</ul>
    </>
  );
};