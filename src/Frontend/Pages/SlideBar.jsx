import React from "react";
import { Nav } from "react-bootstrap";
import "../Style/SlideBar.scss";
import { useNavigate } from "react-router-dom";

function SlideBar() {
  const navigate = useNavigate();

  return (
    <div id="SlideBar-page">
      <div className="wrapper">
        <h1>
          <span>W</span>usla
        </h1>
        <ul>
          <li>
            <button onClick={() => navigate("/")}>Dashboard</button>
          </li>
          <li>
            <button onClick={() => navigate("/home")}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate("/profile")}>Profile</button>
          </li>
        </ul>

        <div className="login">
          <button className="login" onClick={() => navigate("/login")}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlideBar;
