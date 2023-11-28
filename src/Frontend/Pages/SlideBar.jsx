import React, { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import "../Style/SlideBar.scss";
import { useNavigate } from "react-router-dom";
import { auth, onAuthStateChanged, signOut } from "../../firebase";
import "../Style/Privacy.scss";
function SlideBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

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
          <li>
            <button onClick={() => navigate("/userdetails")}>
              User Details
            </button>
          </li>
        </ul>

        <div className="login">
          {user ? (
            <button className="logout" onClick={handleLogout}>
              Log Out
            </button>
          ) : (
            <button className="login" onClick={() => navigate("/login")}>
              Log In
            </button>
          )}
        </div>
        <Button
          variant="outline-warning"
          onClick={() => navigate("/privacypolicy")}
        >
          Privacy and Policy
        </Button>
      </div>
    </div>
  );
}

export default SlideBar;
