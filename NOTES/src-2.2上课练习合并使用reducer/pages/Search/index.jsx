import React, { Component } from "react";

import PubSub from "pubsub-js";
import { TOPIC } from "../../constans";
export default class Search extends Component {
  state = { searchName: "" };

  handleChange = (e) => {
    this.setState({
      searchName: e.target.value.trim(),
    });
  };

  handleClick = () => {
    PubSub.publish(TOPIC, this.state.searchName);
  };
  handle2 = () => {
    PubSub.publish()
  };
  handle3 = () => {
    PubSub.publish()
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            value={this.state.searchName}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Search</button>
        </div>
        <button onClick={this.handle2}>显示全部</button>
        <button onClick={this.handle3}>显示部分</button>
      </section>
    );
  }
}
