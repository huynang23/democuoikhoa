import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/main.css";
import Loading from "./Loading";
const Nu = () => {
  const [listDanhmuc, setListDanhmuc] = useState();
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadDulieu, setloadDulieu] = useState(false);
  const [productFirst, setListProductFirst] = useState([]);

  useEffect(() => {
    fetch("https://633ae702e02b9b64c61a63ba.mockapi.io/api/v1/quanao/?loai=nu")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListData(data);
        setLoading(false);
        setListDanhmuc(unique(data));
        setListProductFirst(data);
      });
  }, [loadDulieu]);

  function unique(arr) {
    const newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i].danhmuc)) {
        newArr.push(arr[i].danhmuc);
      }
    }
    return newArr;
  }

  const tatcasanpham = () => {
    setloadDulieu(!loadDulieu);
  };
  const loadSanPham = (item) => {
    const listProduct = productFirst.filter((data) => data.danhmuc == item);
    setListData([...listProduct]);
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="row">
          <div className="col l-2 m-0 c-0">
            <nav className="category">
              <h4 className="category_heading">Danh mục sản phẩm</h4>
              <ul className="category_list">
                <li classname="category_list_item category_item_active">
                  <a onClick={tatcasanpham} className="category_link">
                    Tất Cả
                  </a>
                </li>
                {listDanhmuc
                  ? listDanhmuc.map((item) => {
                      return (
                        <li classname="category_list_item category_item_active">
                          <a
                            onClick={() => loadSanPham(item)}
                            className="category_link"
                          >
                            {item}
                          </a>
                        </li>
                      );
                    })
                  : ""}
              </ul>
            </nav>
          </div>
          <div className="col l-10 m-12 c-12">
            <div className="home_product">
              <div className="row">
                {loading ? (
                  <Loading></Loading>
                ) : (
                  listData.map((item) => {
                    return (
                      <div className="grid__column2_4 m-4 c-6">
                        <div className="product-card">
                          <NavLink
                            to={`/product-detail/${item.id}`}
                            className="product_link"
                          >
                            <div className="product-frame">
                              <img
                                src={item.hinhanh}
                                className="product-img"
                                alt=""
                              />
                            </div>
                            <div className="product-caption">
                              <p className="product-name">{item.tensp}</p>
                              <p className="product-price">
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(item.gia)}
                              </p>
                            </div>
                            <div className="product-action">
                              {/* <span>
                                <i className="fa-solid fa-cart-plus" />
                              </span> */}
                            </div>
                          </NavLink>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nu;
