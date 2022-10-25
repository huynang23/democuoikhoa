import React from "react";
import "../CSS/chitiet.css";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CtxCart } from "../App";



const Chitietsanpham = () => {
  const [infoProduct, setInfoProduct] = useState({});
  const [count, setCount] = useState(1);
  const cart = useContext(CtxCart);
  const params = useParams();
  const navigate = useNavigate()
  
  const [imgProduct, setImgProduct] = useState();
  const [size, setSize] = useState("");
  const selecimg = (e) => {
    setImgProduct(e.target.src);
  };
  useEffect(() => {
    fetch(
      `https://633ae702e02b9b64c61a63ba.mockapi.io/api/v1/quanao/` + params.id
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInfoProduct(data);
        setImgProduct(data.hinhanh);
      });
  }, []);
  const onChangeCount = (e) => {
    setCount(e.target.value);
  };
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    // const i = cart.cart1.map((item) => {
    //   if (item.id === infoProduct.id && item.count > count) {
    //     item.count -= parseInt(count);
    //   }
    //   return item;
    // });
    // cart.setCart(i);
    // localStorage.setItem("cart", JSON.stringify(i));
    setCount(count - 1);
  };
  const onChangeValue = (e) => {
    setSize(e.target.value);
  };

  const handleClickBuy = () =>{
    // swal("Đặt hàng thành công", "    ", "success");
    navigate('/checkout')
  }

  const handleButtonCard = (infoProduct) => {
    const cartItem = {
      tensp: infoProduct.tensp,
      id: infoProduct.id,
      gia: infoProduct.gia,
      hinhanh: infoProduct.hinhanh,
      size: size,
      count: infoProduct.count,
    };
    console.log(cartItem);
    let kt = 0;
    cart.cart1.map((item) => {
      if (item.id === infoProduct.id && item.size === size) {
        item.count += parseInt(count);
        kt = 1;
      }
      return item;
    });
    if (kt === 0) {
      cart.cart1.push(cartItem);
    }
    console.log(cart.cart1);
    localStorage.setItem("cart", JSON.stringify([...cart.cart1]));
    cart.setCart([...cart.cart1]);
  };
  return (
    <div className="product-detail">
      <div className="grid">
        <div className="hero-content">
          <h1>Thông tin sản phẩm</h1>
        </div>
        <div className="product_ct1">
          {/* html render */}
          <div className="product-slide">
            <img className="product-img-detail" src={imgProduct} alt="sp" />
            <div className="list-product-img">
              <img
                className="product-img-item"
                src={infoProduct.hinhanh1}
                alt="sp"
                onClick={selecimg}
              />
              <img
                className="product-img-item"
                src={infoProduct.hinhanh2}
                alt="sp"
                onClick={selecimg}
              />
              <img
                className="product-img-item"
                src={infoProduct.hinhanh3}
                alt="sp"
                onClick={selecimg}
              />
              <img
                className="product-img-item"
                src={infoProduct.hinhanh}
                alt="sp"
                onClick={selecimg}
              />
            </div>
          </div>
          <div className="product-infomation">
            <div className="product-title">
              <h1>{infoProduct.tensp}</h1>
            </div>
            <span
              style={{ color: "rgb(122, 122, 122)" }}
              className="product-id"
            >
              Mã sản phẩm:{infoProduct.id}
            </span>
            <div className="pro-price">
              <h3>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(infoProduct.gia)}
              </h3>
            </div>
            <form
              id="add-item-form"
              className="add-item-form"
              name="variant-form"
              action="#"
            >
              <div className="quantity-area">
                <input
                  id="reduce-quantity-btn"
                  type="button"
                  defaultValue="-"
                  className="change-quantity-btn"
                  onClick={handleDecrease}
                />
                <input
                  id="quantity"
                  min={1}
                  name="quantity"
                  type="text"
                  value={count}
                  onChange={onChangeCount}
                />
                <input
                  id="raise-quantity-btn"
                  type="button"
                  defaultValue="+"
                  className="change-quantity-btn"
                  onClick={handleIncrease}
                />
              </div>

              <div className="swatch">
                <div className="swatch-header">Kích Thước</div>
                <div className="swatch-element" onChange={onChangeValue}>
                  <input
                    id="swatch-0-S"
                    type="radio"
                    name="option-0"
                    value="S"
                  />
                  <label for="swatch-0-S">S</label>
                </div>
                <div className="swatch-element" onChange={onChangeValue}>
                  <input
                    id="swatch-0-S"
                    type="radio"
                    name="option-0"
                    value="M"
                  />
                  <label for="swatch-0-S">M</label>
                </div>
                <div className="swatch-element" onChange={onChangeValue}>
                  <input
                    id="swatch-0-S"
                    type="radio"
                    name="option-0"
                    value="L"
                  />
                  <label for="swatch-0-S">L</label>
                </div>
                <div className="swatch-element" onChange={onChangeValue}>
                  <input
                    id="swatch-0-S"
                    type="radio"
                    name="option-0"
                    value="XL"
                  />
                  <label for="swatch-0-S">XL</label>
                </div>
              </div>

              <div className="underline">
                <button
                  id="add-product-to-cart"
                  className="hero-btn-full"
                  type="submit"
                  onClick={() => {
                    handleButtonCard(infoProduct);
                  }}
                >
                  THÊM VÀO GIỎ
                </button>
                <button button onClick={handleClickBuy}
                  id="add-product-to-cart"
                  className="hero-btn-full"
                  type="submit"
                >
                  MUA HÀNG
                </button >
              </div>
            </form>
            <div className="description-section section">
              <h3>Mô tả</h3>
              <ul>
                <li className="mota-sp">{infoProduct.mota}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chitietsanpham;
