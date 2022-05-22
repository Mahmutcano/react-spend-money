import React from "react";
import { ListGroup, Badge, ProgressBar, Card } from "react-bootstrap";

const BasketItem = ({item, product}) => {
  return (
    <div>
      <ListGroup.Item
        key={item.id}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{product.title}</div>
          {item.title}
        </div>
        <Badge bg="primary" pill>
          Alınan Miktar: {item.amount}
        </Badge>
      </ListGroup.Item>
    </div>
  );
};

export default BasketItem;
