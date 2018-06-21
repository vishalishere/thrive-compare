/* global chrome */

import React, { Component } from "react";
import { getCurrentTabUrl, getPrice } from "./utilities";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    url: null,
    price: null,
    title: null,
    manufacturer: null,
    loading: false
  };

  componentDidMount() {
    getPrice(
      () => this.setState({ loading: true }),
      ({ price, title, manufacturer, url }) =>
        this.setState({
          price,
          title,
          manufacturer,
          url,
          loading: false
        })
    );
  }

  render() {
    const { price, title, manufacturer } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {this.state.loading &&
            <div>
              <h1>{"Loading..."}</h1>
              <img src={logo} className="App-logo" alt="logo" />
            </div>}
          {this.renderLoadedState()}
        </header>
      </div>
    );
  }

  renderLoadedState() {
    const { price, title, manufacturer, url, loading } = this.state;

    if (!price || !title || !manufacturer || loading) return null;

    return (
      <div>
        <h1>
          {manufacturer} {title} was found on Thrive Market for ${price}.
        </h1>
        <h3 onClick={() => this.openNewTab(url)}>
          Click here to purchase this product on Thrive Market.
        </h3>
      </div>
    );
  }

  openNewTab(url) {
    chrome.tabs.create({ url });
  }
}

export default App;
