import React from "react";
import { Card } from "react-bootstrap";

const PrimaryMoney = ({ money, total }) => {
  return (
    <div>
      <Card style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Card.Header>Ana Para</Card.Header>
        <Card.Body>
          {(total > 0 && (
            <Card.Title style={{ fontSize: "5rem" }}>
              {money - total}$ kaldı.
            </Card.Title>
          )) || <Card.Title style={{ fontSize: "5rem" }}>{money}$</Card.Title>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PrimaryMoney;
