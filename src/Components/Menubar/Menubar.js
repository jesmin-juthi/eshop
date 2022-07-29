import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./Menubar.css";

const Menubar = (props) => {
  return (
    <div>
      <div className="header mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    eShop
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          Cart <sup>{props.count}</sup>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
