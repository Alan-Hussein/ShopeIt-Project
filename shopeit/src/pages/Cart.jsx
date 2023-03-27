import React, { useContext } from "react";
import Header from "../Components/Header/Header";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import { CartContext } from "../context/Cartcontext";
import useFetchCart from "../hooks/useFetchCart";
import ChildCartProduct from "../Components/ChildCartProduct";

const Cart = () => {
  const { urlCart} = useContext(CartContext);
  const { data, loading, error } = useFetchCart(urlCart);

  // if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  return (
    <>
      <Header page="Favourites" />
      <h1>Cart</h1>
      <div className="cart-products">
        {data.length !== 0 ? (
          data.map((product, index) => {
            return (
              <div className="cart-product">
                <ChildCartProduct key={index} product={product} />
              </div>
            );
          })
        ) : (
          <p>You haven't chosen any item yet!</p>
        )}
      </div>
    </>
  );
};

export default Cart;
