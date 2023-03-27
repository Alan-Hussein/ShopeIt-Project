import React, { useState, useContext } from "react";
import { CartContext } from "../context/Cartcontext";
function Counter({ price, id }) {
  const [count, setCount] = useState(1);
  const { deleteCartIds } = useContext(CartContext);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    count > 1 ? setCount(count - 1) : deleteCartIds(id);
  };

  return (
    <div>
      <span className="count">{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <span className="total">total : {count * price} </span>
    </div>
  );
}

export default Counter;
