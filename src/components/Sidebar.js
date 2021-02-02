import React, { Component } from 'react'
import '../css/style.css'
export class Sidebar extends Component {
    render() {
        return (
            <div>
             <nav className="col-md-2 d-none  d-md-block  sidebar">
          <div className="sidebar-sticky ">
            <ul className="nav flex-column  ">
              <li className="nav-item">
                <a className="nav-link active " href="/">

                 <i className="fa fa-user   pr-1"></i>
                  Employer Profile  
                </a>
              </li>
  <li className="nav-item">
                <a className="nav-link active " href="/">

                 <i className="fa fa-car  pr-1"></i>
                  OnBoard Your Vehicles 
                </a>
              </li>
                <li className="nav-item">
                <a className="nav-link active " href="/">

                 <i className="fa fa-search    pr-1"></i>
                  Search & Hire Drivers 
                </a>
              </li>
               
                <li className="nav-item">
                <a className="nav-link active " href="/">

                 <i className="fa fa-envelope   pr-1"></i>
                  Inbox <span className="sr-only">(current)</span>
                </a>
              </li>
<li className="nav-item">
                <a className="nav-link active " href="/">

                 <i className="fa fa-briefcase    pr-1"></i>
                  Recruitment 
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active " href="/">

                 <i className="fa fa-sitemap    pr-1"></i>
                  My Organisations
                </a>
              </li><li className="nav-item">
                <a className="nav-link active " href="/">

                 <i className="fa fa-star    pr-1"></i>
                  Rate A Driver 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/">

                 <i className="fa fa-credit-card    pr-1"></i>
                  My Subscription 
                </a>
              </li>
            </ul>

          
          
          </div>
        </nav>
            </div>
        )
    }
}

export default Sidebar
