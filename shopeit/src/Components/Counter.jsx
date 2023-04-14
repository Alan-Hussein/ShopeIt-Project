import React, { useState, useContext } from "react";
import { CartContext } from "../context/Cartcontext";
function Counter({ price, id , updateQuantity}) {
  const [count, setCount] = useState(1);
  const { deleteCartIds } = useContext(CartContext);

  const increment = () => {
    setCount(count + 1);
    updateQuantity(id, count + 1);

  };

  const decrement = () => {
    count > 1 ? setCount(count - 1) : deleteCartIds(id);
    updateQuantity(id, count - 1);

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
