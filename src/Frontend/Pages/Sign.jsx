import React, { useState } from "react";
import "../Style/Sign.scss";
import codingImage from "../../assets/image/coding.jpg";
import {
  auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "../../firebase";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

function Sign() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const handleGoogleSignUp = async () => {
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

  const handleEmailPasswordSignUp = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      if (password === passwordConf) {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = result.user;
        console.log(user);

        // Navigate to profile on success
        navigate("/profile");
      } else {
        console.error("Passwords do not match");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="Sign-Page">
      <div className="wrapperMain">
        <section id="right">
          <div className="wrapper">
            <h3>Sign Up</h3>
            <p>Your Social Campaigns</p>
            <div id="button">
              <button className="google button" onClick={handleGoogleSignUp}>
                Sign up with Google
              </button>
              {/* You can add a similar button for signing up with Facebook */}
            </div>

            <form onSubmit={handleEmailPasswordSignUp} className="form">
              <h4>Name</h4>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
              <p>
                Use 8 or more characters with a mix of letters, numbers &
                symbols.
              </p>
              <h4>Confirm Password</h4>
              <input
                type="password"
                name="paswdConf"
                id="paswdConf"
                placeholder="Password Confirmation"
                value={passwordConf}
                onChange={(e) => setPasswordConf(e.target.value)}
              />
              <button type="submit" onClick={() => navigate("/")}>
                Sign Up
              </button>
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

export default Sign;
