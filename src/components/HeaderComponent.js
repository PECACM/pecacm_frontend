import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import '../assets/css/header.css'
class Header extends Component {

  render() {
    return (
      <Jumbotron>
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>PEC ACM</h1>
              <p>Tech, Innovation and Development - Staying ahead of the time.
              </p>
            </div>
          </div>
      </Jumbotron>
    );
  }
}

export default Header;