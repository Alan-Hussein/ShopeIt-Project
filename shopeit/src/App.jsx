import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Favorites from "./Components/Favorites";
import { FavoriteContextProvider } from "./context/Favoritescontex";
import Cart from "../src/pages/Cart";
import { CartContextProvider } from "./context/Cartcontext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <div className="App">
        <CartContextProvider>
          <FavoriteContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </FavoriteContextProvider>
        </CartContextProvider>
      </div>
    </div>
  );
}

export default App;
