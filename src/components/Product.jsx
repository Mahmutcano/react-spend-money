import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

const Product = ({ basket, setBasket, product, total, money }) => {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const sellBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id)
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)])
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        currentBasket,
      ]);
    }
  };
  return (
    <>
      <CardGroup
        key={product.id}
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}$</Card.Text>
            <Button disabled={total + product.price > money} onClick={addBasket} variant="primary">
              Satın Al
            </Button>
            <Button disabled={!basketItem} onClick={sellBasket} variant="danger">
              Sat
            </Button>
            <Card.Text>{(basketItem && basketItem.amount) || 0}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default Product;
