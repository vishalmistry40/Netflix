import React, { Component } from "react";
import { connect } from "react-redux";
import MyList from "./components/MyList/MyList";
import Recommendation from "./components/Recommendation/Recommendation";
import BottomList from "./components/BottomList/BottomList";
import { fetchData, removeFromMyList, addToMyList } from "./actions";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  handleAdd = item => this.props.addToMyList(item);
  handleRemove = item => this.props.removeFromMyList(item);

  render() {
    const { mylist, recommendations } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <img
              src={logo}
              className="img-thumbnail logo bg-transparent border-0"
              alt="netflix"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <MyList list={mylist} handleClick={this.handleRemove} />
            <Recommendation
              list={recommendations}
              handleClick={this.handleAdd}
            />
            <BottomList list={mylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ mylist, recommendations }) => ({ mylist, recommendations }),
  { fetchData, addToMyList, removeFromMyList }
)(App);
