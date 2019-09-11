import React from "react";
import MovieItem from "../MovieItem/MovieItem";

export default function MovieList({
  title,
  movieList = [],
  handleClick,
  buttonText,
  buttonClassname
}) {
  return (
    <div className="container-fluid mt-5">
      <h4 className="text-white">{title}</h4>
      <div className="row mt-1">
        {movieList.map(item => (
          <MovieItem
            key={item.id}
            img={item.img}
            title={item.title}
            buttonText={buttonText}
            buttonClassname={buttonClassname}
            onClick={() => handleClick(item)}
          />
        ))}
      </div>
    </div>
  );
}
