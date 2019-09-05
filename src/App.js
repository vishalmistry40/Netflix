import React, { Component } from "react";
import { connect } from "react-redux";

import MyList from "./components/MyList/MyList";
import Recommendation from "./components/Recommendation/Recommendation";
import BottomList from "./components/BottomList/BottomList";

import { fetchAppData } from './actions';

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount () {
    const { fetchAppData } = this.props;
    fetchAppData();
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <img src={logo} className="img-thumbnail logo" alt="netflix" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <MyList />
            <Recommendation />
            <BottomList />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchAppData })(App);
