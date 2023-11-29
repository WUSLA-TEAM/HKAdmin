import React from "react";
import { Button, Card } from "react-bootstrap";
import "../Style/Dashboard.scss";
import "../Style/App.scss";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <section id="dashboard-page">
        <div id="wrapper">
          <section id="top">
            <div className="wrapper">
              <h2>Dashboard</h2>
              <Card className="classBox">
                <Card.Body className="pa-20">
                  <Card.Title className="tittle-Main">Class</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted subtitle">
                    Vide Uploaded
                  </Card.Subtitle>

                  <Card.Text className="cardText">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="danger"
                    className="button-upload"
                    onClick={() => navigate("/uploadform")}
                  >
                    Upload Video
                  </Button>
                  <Button variant="outline-secondary" className="TotalVideo">
                    Total Video
                  </Button>
                </Card.Body>
              </Card>

              <Card className="card-users">
                <Card.Body>
                  <Card.Title>User Details</Card.Title>
                  <Card.Text>
                    Get all user Details exapt some personal info
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="footercard">
                  <small className="text-muted">Last updated 3 mins ago</small>
                  <Button
                    variant="outline-success"
                    className="userDetails-Button"
                    onClick={() => navigate("/userdetails")}
                  >
                    User Details
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
