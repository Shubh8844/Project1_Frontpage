import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";
export default function PageUnderConstruction() {
  return (
    <Jumbotron>
      <h1>Hello, There!</h1>
      <p>The Page is under Construction.</p>
      <p>
        <Link to="/">
          <Button variant="primary">Go Back</Button>
        </Link>
      </p>
    </Jumbotron>
  );
}
