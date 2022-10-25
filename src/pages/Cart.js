import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CtxCart } from "../App";

const Cart = () => {
  const cart = useContext(CtxCart);
  // const [count, setCount] = useState(1);
  const tongtien = () => {
    let tongtien = 0;
    cart.cart1.map((item) => {
      tongtien += item.count * item.gia;
    });
    return tongtien;
  };
  const handleChangeQuantity = (e) => {
    // setCount(e.target.value);
  };
  const increase = (item) => {
    const cong = cart.cart1.map((i) => {
      if (item.id === i.id) {
        i.count += parseInt(1);
      }
      return i;
    });
    cart.setCart(cong);
    localStorage.setItem("cart", JSON.stringify(cong));
  };
  const descrease = (item) => {
    const tru = cart.cart1.map((i) => {
      if (item.id === i.id && i.count > 1) {
        i.count -= parseInt(1);
      }
      return i;
    });
    cart.setCart(tru);
    localStorage.setItem("cart", JSON.stringify(tru));
  };
  const handleRemove = (item) => {
    cart.setCart(cart.cart1.filter((i) => i.id !== item.id));
    localStorage.setItem("cart", JSON.stringify(cart.cart1));
  };

  const navigate = useNavigate()
  const handlePay =()=>{
    navigate('/checkout')
  }
  return (
    <div>
      <div className="cart-detail">
        <div className="grid">
          <div className="hero-content">
            <h1>Giỏ hàng</h1>
          </div>
          <div className="cart_3">
            <div className="cart_2">
              {/* sp1 */}
              {cart.cart1
                ? cart.cart1.map((item) => {
                    return (
                      <div className="tong_gio">
                        <div className="cart_ct1">
                          {/* html render */}
                          <div className="cart-slide">
                            <img
                              className="cart-img"
                              src={item.hinhanh}
                              alt="sp"
                            />
                          </div>
                          <div className="cart-infomation">
                            <div className="cart-title">
                              <p>{item.tensp}</p>
                            </div>
                            <span
                              style={{
                                color: "rgb(122, 122, 122)",
                                marginRight: "10px",
                              }}
                              className="cart-id"
                            >
                              Mã sản phẩm: {item.id}
                            </span>
                            <span>-</span>
                            <span
                              style={{
                                color: "rgb(122, 122, 122)",
                                marginLeft: "10px",
                              }}
                              className="cart-id"
                            >
                              Kích thước: {item.size}
                            </span>
                            <div className="pro-price">
                              <h3>
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(item.gia)}
                              </h3>
                            </div>
                            <form
                              id="add-item-form"
                              name="variant-form"
                              action="#"
                            >
                              <div className="quantity-area">
                                <input
                                  id="reduce-quantity-btn"
                                  type="button"
                                  defaultValue="-"
                                  className="change-quantity-btn"
                                  onClick={() => descrease(item)}
                                />
                                <input
                                  id="quantity"
                                  min={1}
                                  name="quantity"
                                  type="text"
                                  defaultValue={1}
                                  value={item.count}
                                  // onChange={() => {
                                  //   handleChangeQuantity(item);
                                  // }}
                                />
                                <input
                                  id="raise-quantity-btn"
                                  type="button"
                                  defaultValue="+"
                                  className="change-quantity-btn"
                                  onClick={() => increase(item)}
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="tong_tien">
                          <span
                            className="cart_pd_multiply1"
                            style={{ padding: "0 0 0 68px" }}
                            onClick={() => {
                              handleRemove(item);
                            }}
                          >
                            x
                          </span>
                          <span>
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.gia * item.count)}
                          </span>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            {/* end sp */}
            <div className="cart_thanhtoan">
              <form
                action
                id="thanhtoan_form"
                className="thanhtoan_form"
                name="thanhtoan_form"
              >
                <div className="form_thongtin">Thông tin mua hàng</div>
                <div className="form_thongtin_tien">
                  <p>
                    Tổng tiền :
                    <span>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(tongtien())}
                    </span>
                  </p>
                </div>
                <div className="btn_form_thanhtoan">
                  <button className="btn_btn_thanhtoan" onClick={handlePay}>Thanh toán</button>
                </div>
                <a href="/index.html" className="continue">
                  Tiếp tục mua hàng
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
