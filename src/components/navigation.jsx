import React from "react";
import { Link } from 'react-router-dom';

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="/Moborobot">
            HU BBM479/480 Term Project
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/Moborobot/installation">Orin Installation</Link>
            </li>
            <li>
              <Link to="/Moborobot/simulation">Simulation Setup</Link>
            </li>
            <li>
              <a href="/Moborobot/#demo" className="page-scroll">
                DEMO
              </a>
            </li>
            <li>
              <a href="/Moborobot/#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="/Moborobot/#team" className="page-scroll">
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
