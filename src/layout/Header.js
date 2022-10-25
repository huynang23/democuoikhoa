import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextSearch, CtxCart } from "../App";

const Header = () => {
  const ctxSearch = useContext(ContextSearch);
  const cart = useContext(CtxCart);
  let input;
  const inputsearch = (e) => {
    ctxSearch.setSearch(e.target.value);
    input = e.target.value;
    console.log(input);
  };

  const [checkCart, setcheckCart] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart"));
    if (items) {
      cart.setCart(items);
    }
  }, []);
  const handleRemove = (item) => {
    const items = cart.cart1.filter((i) => i.id !== item.id);
    cart.setCart([...items]);
    localStorage.setItem("cart", JSON.stringify(items));
  };
  const handleButtonCard = () => {
    navigate("/cart");
  };
  const tongtien = () => {
    let tongtien = 0;
    cart.cart1.map((item) => {
      tongtien += item.count * item.gia;
    });
    return tongtien;
  };
  const quantityCart = () => {
    let quantity = 0;
    cart.cart1.map((item) => {
      quantity += item.count;
    });
    return quantity;
  };

  return (
    <header className="header">
      <div className="header2">
        <div className="grid">
          <div className="header__navbar">
            <div className="header__navbar_item1">
              Levents® – Popular Streetwear Brand HỘ KINH DOANH Levents
            </div>
            <ul className="header__navbar_list">
              <li className="header__navbar_item">
                Levents® – Popular Streetwear Brand HỘ KINH DOANH Levents
              </li>
            </ul>
            <ul className="header__navbar_list">
              <li className="header__navbar_item">
                134 Trương Định, Hai Bà Trưng, Hà Nội
              </li>
              <li className="header__navbar_item">
                <a href="/signup.html" className="DKDN_link">
                  <span className="btn__DKDN">Đăng ký /</span>
                </a>
                <a href="/login.html" className="DKDN_link">
                  <span className="btn__DN">Đăng Nhâp</span>
                </a>
                <a href="/login.html" className="DKDN_link">
                  <span className="btn__DX">Đăng Xuất</span>
                </a>
              </li>
              <li className="header__navbar_item">
                <a
                  href="https://www.facebook.com/haianh.t.99"
                  target="_blank"
                  className="icon_link"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="icon_link"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a
                  href="https://twitter.com/?lang=vi"
                  target="_blank"
                  className="icon_link"
                >
                  <i className="fa-brands fa-twitter" />
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzGpHHPpFmDcJtdpkzVqTClpRgCW"
                  className="icon_link"
                  target="_blank"
                >
                  <i className="fa-solid fa-envelope" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  className="icon_link"
                  target="_blank"
                >
                  <i className="fa-brands fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
          <div className="header_with_search">
            <label htmlFor="nav-mobile-input" className="nav_bar-btn">
              <i className="fa-solid fa-bars" />
            </label>
            <input
              type="checkbox"
              hidden
              name
              className="nav_input"
              id="nav-mobile-input"
            />
            <label htmlFor="nav-mobile-input" className="nav_overlay" />
            {/* repon */}
            <div className="menubar_content_mobile">
              <label htmlFor="nav-mobile-input" className="nav_mobile_close">
                <i className="fa-solid fa-xmark" />
              </label>
              <form
                id="header__search_overlay"
                className="header__search_overlay"
              >
                <input
                  onChange={inputsearch}
                  type="text"
                  placeholder="Tìm kiếm..."
                />
                <button className="header_search-btn-overlay" type="submit">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </form>
              <ul className="menubar_list_mobile">
                <li className="menubar_item_nobile">
                  <Link to="/" className="menubar_link_a">
                    TRANG CHỦ
                  </Link>
                </li>
                <li className="menubar_item_nobile">
                  <a href="/gioithieu.html" className="menubar_link_a_mobile">
                    GIỚI THIỆU
                  </a>
                </li>
                <li className="menubar_item_nobile menubar_posi1">
                  <Link to={"/shopnu"} className="menubar_link_a_mobile">
                    SHOP NỮ
                  </Link>
                </li>
                <li className="menubar_item_nobile menubar_posi2">
                  <Link to={"/shopnam"} className="menubar_link_a_mobile">
                    SHOP NAM
                  </Link>
                </li>
                <li className="menubar_item_nobile">
                  <a href="/tintuc.html" className="menubar_link_a_mobile">
                    TIN TỨC
                  </a>
                </li>
                <li className="menubar_item_nobile">
                  <a href="/lienhe.html" className="menubar_link_a_mobile">
                    LIÊN HỆ
                  </a>
                </li>
                <li className="menubar_item_nobile">
                  <a href="/login.html" className="menubar_link_a_mobile">
                    Đăng nhập
                  </a>
                </li>
                <li className="menubar_item_nobile">
                  <a href="/signup.html" className="menubar_link_a_mobile">
                    Đăng ký
                  </a>
                </li>
                {/* <li class="nav_bar-btn"><i class="fa-solid fa-bars"></i></li> */}
              </ul>
            </div>
            {/* repon */}
            <div className="header_logo">
              <Link to="/">
                <img
                  src="https://theme.hstatic.net/1000306633/1000891824/14/logo_menu_no_scroll.png?v=173"
                  className="header_logo_item header_logo_item_mobile"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="header_search">
              <form id="header__search_form" className="header__search_form">
                <input
                  onChange={inputsearch}
                  type="text"
                  placeholder="Tìm kiếm..."
                />
              </form>
            </div>
            <div className="header_cart">
              <div>
                <i className="fa-solid fa-cart-shopping size" />
                <span>Giỏ hàng</span>
                <span className="header-cart-num">{quantityCart()}</span>
                {/* khong cos sp: header__cart_list_no_cart */}
                <div className="header__cart_list">
                  <p className="text_cart">
                    Chưa có sản phẩm nào trong giỏ hàng
                  </p>
                  <ul className="cart_list_item">
                    {cart.cart1
                      ? cart.cart1.map((item) => {
                          return (
                            <li className="cart_list_item1">
                              <img
                                src={item.hinhanh}
                                alt=""
                                className="header_cart_item1"
                              />
                              <div className="cart_item_info">
                                <h5 className="cart_text_pd">{item.tensp}</h5>
                                <span className="cart_pd_price">
                                  {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                  }).format(item.gia)}
                                </span>

                                <span className="cart_pd_multiply">x</span>
                                <span className="cart_pd_qnt">
                                  {item.count}
                                </span>
                              </div>
                              <div
                                className="cart_item_info1"
                                onClick={() => {
                                  handleRemove(item);
                                }}
                              >
                                <i className="fa-solid fa-xmark" />
                              </div>
                            </li>
                          );
                        })
                      : ""}
                  </ul>
                  <div className="border_bt_cart" />
                  <span className="tong_gia">Tổng cộng :</span>
                  <span>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(tongtien())}
                  </span>
                  <div className="border_bt_cart" />
                  <button className="btn_cart_pd" onClick={handleButtonCard}>
                    Xem giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="header_menubar">
            <div className="border_top" />
            <div className="menubar_content">
              <ul className="menubar_list">
                <li className="menubar_item">
                  <Link to="/" className="menubar_link_a">
                    TRANG CHỦ
                  </Link>
                </li>
                <li className="menubar_item">
                  <Link to={"/gioithieu"} className="menubar_link_a">
                    GIỚI THIỆU
                  </Link>
                </li>
                <li className="menubar_item menubar_posi1">
                  <Link to={"/shopnu"} className="menubar_link_a">
                    SHOP NỮ
                  </Link>
                </li>
                <li className="menubar_item menubar_posi2">
                  <Link to={"/shopnam"} className="menubar_link_a">
                    SHOP NAM
                  </Link>
                </li>
                <li className="menubar_item">
                  <Link to={'/tintuc'} className="menubar_link_a">
                    TIN TỨC
                  </Link>
                </li>
                <li className="menubar_item">
                  <Link to={"/lienhe"} className="menubar_link_a">
                    {" "}
                    LIÊN HỆ
                  </Link>
                </li>
                {/* <li class="nav_bar-btn"><i class="fa-solid fa-bars"></i></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
