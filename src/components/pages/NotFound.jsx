import React, { Component } from 'react';
import NavigationLinks from "../navigation_links";

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <NavigationLinks />
        <div className="row text-center">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">Sorry, an error has occured, Requested page not found!</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
