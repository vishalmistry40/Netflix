import React from 'react';
import { connect } from 'react-redux';

function BottomList({ mylist = [] }) {
  return (
    <div className="container mt-5">
      <h4 className="text-white">My List Titles</h4>
      {mylist.map(item => (
        <div className="col-md-4" key={item.id}>
          <div className="mt-3">
            <h5 className="text-white text-center">{item.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default connect(({ mylist }) => ({ mylist }))(BottomList);