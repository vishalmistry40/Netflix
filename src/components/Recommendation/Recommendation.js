import React from "react";
import { connect } from 'react-redux' 
import { addToMyList } from '../../actions';
import './recommendations.css';

function Recommendation({ recommendations = [], addToMyList }) {

  const handleClick = (item) => addToMyList(item);

  return (
    <div className="container-fluid mt-5">
      <h4 className="text-white">Recommendations</h4>
      <div className="row mt-1">
        {recommendations.map(item => (
          <div className="col-md-auto" key={item.id}>
            <div className="mt-3">
              <h5 className="text-white text-center">{item.title}</h5>
              <div className="img-container">
                <img
                  src={item.img}
                  className="mx-auto rounded my-3 d-block"
                  alt={item.title}
                />
                <button className="btn btn-success mx-auto" onClick={() => handleClick(item)}>Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = ({ recommendations }) => ({ recommendations });
const mapDispatchToProps = { addToMyList };
export default connect(mapStateToProps, mapDispatchToProps)(Recommendation);