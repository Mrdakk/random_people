import React, { Component } from 'react';
import { Route } from "react-router-dom"

import { HomePage } from "./view/pages/HomePage"
import { About } from "./view/pages/About"

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={HomePage} />
      </>)
  }
}

export default App;
