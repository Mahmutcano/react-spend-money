import PrimaryMoney from "./components/PrimaryMoney";
import SellList from "./components/SellList";
import Product from "./components/Product";
import "./app.css";
import { useState, useEffect } from "react";
import product from "./product.json";
function App() {
  const [money, setMoney] = useState(100000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * product.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <div className="app">
      <PrimaryMoney money={money} total={total} />
      {product.map((product) => (
        <Product
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          product={product}
          total={total}
          money={money}
        />
      ))}
      <SellList product={product} total={total} basket={basket} />
    </div>
  );
}

export default App;
