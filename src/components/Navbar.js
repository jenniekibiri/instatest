import React, { Component } from "react";
import "../css/style.css";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg ml-5 mt-3">
          <a className="navbar-brand text-dark" href="/">
            InstaDriver
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item   ">
                <button type="button" className="btn  btn-outline-secondary">
                  <h5>Jobs</h5>
                </button>
              </li>

              <li className="nav-item ">
                <button type="button" className="btn btn-outline-secondary">
                  <h5>Get Social</h5>
                </button>
              </li>
              <li className="nav-item ">
                
 <div className=" d-flex  align-items-center ">
     <button type="button" className="btn btn-dark">
                  <h5>James Keem</h5>
                </button>
                  <h5 className="pl-2">Menu</h5>
                  <i className="fa fa-bars fa-2x pl-2 "></i>
                </div>
                
              </li>
            
            </ul>
          </div>
        </nav>
        <div className="bg-dark dark-div">
            
        </div>
      </div>
    );
  }
}

export default Navbar;
