import React, { useContext, useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import { CartContext } from "../context/Cartcontext";
import useFetchCart from "../hooks/useFetchCart";
import ChildCartProduct from "../Components/ChildCartProduct";
import PayButton from "../Components/PayButton";

const Cart = () => {
  const { urlCart, cartIds } = useContext(CartContext);
  const { data, loading, error } = useFetchCart(urlCart);
  const [cartData, setCartData] = useState([]);
  const [orderTotal, setOrderTotal] = useState();
  const [discountCode, setDiscountCode] = useState("");

  useEffect(() => {
    if (data) {
      setCartData(data);
    }
  }, [data]);

  useEffect(() => {
    setCartData([]);
  }, [cartIds]);

  const updateQuantity = (id, quantity) => {
    setCartData((prevData) =>
      prevData.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  useEffect(() => {
    applyDiscount();
  }, [cartData]);

  const applyDiscount = () => {
    const totalPrice = cartData.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    if (discountCode === "HYF") {
      setOrderTotal((totalPrice * 0.41).toFixed(2));
    } else {
      setOrderTotal(totalPrice.toFixed(2));
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const totalPrice = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header page="Favorites" />
      <div className="cart-products">
        {cartData?.length !== 0 ? (
          <>
            {cartData.map((product, index) => (
              <div className="cart-product" key={index}>
                <ChildCartProduct
                  product={product}
                  updateQuantity={updateQuantity}
                />
              </div>
            ))}
            <div className="total-price">
              <span>Total price:</span> ${totalPrice.toFixed(2)}
              <br />
              <div className="discount-code">
                <span>Do you have a discount code ?</span>
                <br />
                <input
                  type="text"
                  value={discountCode}
                  autoFocus
                  onChange={(event) => setDiscountCode(event.target.value)}
                />
                <button onClick={applyDiscount}>Apply</button>
                <h4>Total Price with discount: {orderTotal}</h4>
              </div>
              <PayButton />
            </div>
          </>
        ) : (
          <p>You haven't chosen any item yet!</p>
        )}
      </div>
    </>
  );
};

export default Cart;
