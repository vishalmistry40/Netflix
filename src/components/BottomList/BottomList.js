import React from "react";

export default function BottomList({ list = [] }) {
  return (
    <div className="container-fluid mt-5">
      <h4 className="text-white">My List Titles</h4>
      {list.map(item => (
        <div className="col-md-4">
          <div className="mt-3">
            <div className="text-white text-center">
              <h5>{item.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
