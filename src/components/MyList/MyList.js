import React from "react";
import {connect} from 'react-redux';
import "./MyList.css";

import { removeFromMyList } from '../../actions';

function MyList({ mylist = [], removeFromMyList }) {
  const handleClick = (item) => removeFromMyList(item);
  return (
    <div className="container-fluid mt-5">
      <h4 className=" text-white">My List</h4>
      <div className="row mt-1">
        {mylist.map(item => (
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
                  className="btn btn-danger mx-auto"
                  onClick={() => handleClick(item)}>
                    Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = ({ mylist }) => ({ mylist });
const mapDispatchToProps = { removeFromMyList };
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
