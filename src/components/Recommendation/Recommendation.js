import React from "react";
import "./recommendations.css";
import MovieList from "../MovieList/MovieList";

export default function Recommendation({ list = [], handleClick }) {
  return (
    <MovieList
      movieList={list}
      title="Recommendations"
      buttonText="Add"
      buttonClassname="btn-success"
      handleClick={handleClick}
    />
  );
}
