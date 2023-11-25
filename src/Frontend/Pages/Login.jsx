import React, { useState } from "react";
import "../Style//Login.scss";
import codingImage from "../../assets/image/coding.jpg";
import {
  auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "../../firebase";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      // Navigate to profile on success
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailPasswordSignIn = async (e) => {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      console.log(user);
      // Navigate to profile on success
      navigate("/profile");
    } catch (error) {
      console.error(error);
      // Navigate back to login on fail
      navigate("/sign");
    }
  };

  return (
    <div id="Login-Page">
      <div className="wrapperMain">
        <section id="right">
          <div className="wrapper">
            <h3>Log In</h3>
            <p>Your Social Campaigns</p>
            <div id="button">
              <button className="google button" onClick={handleGoogleSignIn}>
                Sign in with Google
              </button>
            </div>

            <form onSubmit={handleEmailPasswordSignIn} className="form">
              <h4>Email</h4>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h4>Password</h4>
              <input
                type="password"
                name="paswd"
                id="paswd"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Log In</button>
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
