import React from "react";

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
          <div className="col-md-auto" key={item.id}>
            <div className="mt-3">
              <h5 className="text-center text-white">{item.title}</h5>
              <div className="img-container">
                <img
                  src={item.img}
                  className="rounded mx-auto d-block my-3"
                  alt={item.title}
                />
                <button
                  className={`btn ${buttonClassname} mx-auto`}
                  onClick={() => handleClick(item)}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
