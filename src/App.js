import React, { Component } from 'react';
import './App.css';
import AppRoutes from "./router/routes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppRoutes />
      </React.Fragment>
    );
  }
}

export default App;

//React.Fragment or new jsx syntax <> </>
