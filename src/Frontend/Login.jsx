import React from "react";
import "./Login.css";
import codingImage from "../assets/image/coding.jpg";

function Login() {
  return (
    <div id="main">
      <div className="wrapperMain">
        <section id="right">
          <div className="wrapper">
            <h3>Sign In</h3>
            <p>Your Social Campaigns</p>
            <div id="button">
              <button className="google button">Sign in with Google</button>
              <button className="facebook button">Sign in with Facebook</button>
            </div>

            <form action="#" method="get" className="form">
              <h4>Email</h4>
              <input type="email" name="email" id="email" placeholder="Email" />
              <h4>Password</h4>
              <input
                type="password"
                name="paswd"
                id="paswd"
                placeholder="Password"
              />
            </form>
          </div>
        </section>
        <section id="left">
          <div className="box">
            <img src={codingImage} alt="Coding" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
