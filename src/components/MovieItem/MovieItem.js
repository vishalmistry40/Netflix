import React from "react";

function MovieItem(item) {
  return (
    <div className="col-md-auto">
      <div className="mt-3">
        <h5 className="text-center text-white">{item.title}</h5>
        <div className="img-container">
          <img
            src={item.img}
            className="rounded mx-auto d-block my-3"
            alt={item.title}
          />
          <button
            className={`btn ${item.buttonClassname} mx-auto`}
            onClick={() => item.onClick(item)}
          >
            {item.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
