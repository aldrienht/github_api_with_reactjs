import React, { Component } from 'react';
import ReactDom from 'react-dom';
import NavigationLinks from "../navigation_links";

const notificationElement = document.getElementById('notify');
class Notification extends React.Component{
  render(){
    return ReactDom.createPortal(
      <div className="alert alert-success text-center">
        <strong>Hello!</strong> Thank you for checking my repo. By the way this is <strong>ReactDom.createPortal</strong> sample.
      </div>,
      notificationElement
    );
  }
}

class About extends Component {
  render() {
    return (
      <div className="About text-center">
        <NavigationLinks />
        <Notification />
        <h1 className="mt-5">This is a React Application that consumes API from GitHub.</h1>
        <h4>Developer's purpose is to learn and having reference for his future developments.</h4>
        <h6>I followed the youtube tutorial: React Fundamentals by TylerMcGinnis.com
        <br/>I converted & modified some syntax since the tutorial is almost a year ago now (2017).
        <br/>There are new features in <strong>React 16.2.0</strong> that I implemented on this repo as well.
        </h6>

        <br/>
        <p>Developed: February 9, 2018</p>
      </div>
    );
  }
}

export default About;
