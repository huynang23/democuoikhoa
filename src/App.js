import React, { createContext, useState, useEffect } from "react";
import Sanpham from "./pages/Sanpham";

import { Route, Routes } from "react-router-dom";
import Chitietsanpham from "./pages/Chitietsanpham";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Nam from "./pages/Nam";
import Nu from "./pages/Nu";
import Cart from "./pages/Cart";
import Lienhe from "./pages/Lienhe";
import Gioithieu from "./pages/Gioithieu";
import Tintuc from "./pages/Tintuc";
import Checkuot from "./pages/Checkuot";
export const ContextSearch = createContext();
export const CtxCart = createContext();

const App = () => {
  const [search, setSearch] = useState();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("cart"));
    if (cartLS) {
      setCart(cartLS);
    } else {
      setCart([]);
    }
  }, []);
  return (
    <CtxCart.Provider
      value={{
        cart1: cart,
        setCart: setCart,
      }}
    >
      <div id="main">
        <ContextSearch.Provider
          value={{
            search: search,
            setSearch: setSearch,
          }}
        >
          <Header></Header>
          <Routes>
            <Route path="/" element={<Sanpham />}></Route>
            <Route path="/product-detail" element={<Chitietsanpham />}>
              <Route path=":id" element={<Chitietsanpham />}></Route>
            </Route>
            <Route path="/shopnam" element={<Nam />}></Route>
            <Route path="/shopnu" element={<Nu />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/gioithieu" element={<Gioithieu />}></Route>
            <Route path="/tintuc" element={<Tintuc />}></Route>
            <Route path="/lienhe" element={<Lienhe />}></Route>

            <Route path="/checkout" element={<Checkuot/>}></Route>
            
          </Routes>

          <Footer></Footer>
        </ContextSearch.Provider>
      </div>
    </CtxCart.Provider>
  );
};

export default App;
