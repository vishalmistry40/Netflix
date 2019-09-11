import React from "react";
import "./MyList.css";

import MovieList from "../MovieList/MovieList";

export default function MyList({ list = [], handleClick }) {
  return (
    <MovieList
      movieList={list}
      title="My List"
      buttonText="Remove"
      buttonClassname="btn-danger"
      handleClick={handleClick}
    />
  );
}
