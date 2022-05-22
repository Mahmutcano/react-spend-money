import React from "react";
import { ListGroup, Badge, ProgressBar, Card } from "react-bootstrap";
import BasketItem from "./BasketItem";

const SellList = ({ basket, product, total }) => {
  return (
    <div>
      <ListGroup as="ol" numbered>
        {basket.map((item) => (
          <BasketItem
            key={item.id}
            product={product.find((p) => p.id === item.id)}
            item={item}
          />
        ))}
      </ListGroup>
        <Badge bg="success" pill style={{marginTop: 15, textAlign: 'center', display: 'flex'}}>
          <h1  style={{textAlign: 'end'}}>Toplam: {total}$</h1>
        </Badge>
    </div>
  );
};

export default SellList;
