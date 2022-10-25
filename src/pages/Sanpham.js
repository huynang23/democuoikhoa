import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import "../CSS/main.css";
import Loading from "./Loading";
import { ContextSearch, CtxCart } from "../App";
import { Pagination } from "@mui/material";
import axios from "axios";

const Sanpham = () => {
  const [listDanhmuc, setListDanhmuc] = useState();
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productFirst, setListProductFirst] = useState([]);
  const ctxSearch = useContext(ContextSearch);
  const cart = useContext(CtxCart);
  const navigate = useNavigate();
  const [paginationS, setPaginationS] = useState({
    limit: 6,
    page: 1,
  });
  const [filters, setFilters] = useState({
    page: 1,
    limit: 6,
  });
  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      page: page,
      limit: 6,
    }));
  };
  useEffect(() => {
    axios
      .get(`https://633ae702471b8c395577e317.mockapi.io/api/v1/category`)
      .then((res) => {
        const data = res.data;
        setListProductFirst(data);
      });
  }, []);

  useEffect(() => {
    if (ctxSearch.search == null) {
      axios
        .get(`https://633ae702e02b9b64c61a63ba.mockapi.io/api/v1/quanao`, {
          params: filters,
        })
        .then((res) => {
          const data = res.data;
          setListData(data);
          setLoading(false);
        });
    } else {
      axios
        .get(
          `https://633ae702e02b9b64c61a63ba.mockapi.io/api/v1/quanao?tensp=${ctxSearch.search}`,
          {
            params: filters,
          }
        )
        .then((res) => {
          const data = res.data;
          setListData(data);
          setLoading(false);
          // setListDanhmuc(unique(data));
          // setListProductFirst(data);
        });
    }
  }, [ctxSearch.search, filters]);

  // function unique(arr) {
  //   const newArr = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     if (!newArr.includes(arr[i].danhmuc)) {
  //       newArr.push(arr[i].danhmuc);
  //     }
  //   }
  //   return newArr;
  // }
  const tatcasanpham = () => {
    fetch(`https://633ae702e02b9b64c61a63ba.mockapi.io/api/v1/quanao/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListData(data);
        setLoading(false);
        // setListDanhmuc(unique(data));
        // setListProductFirst(data);
      });
  };
  const loadSanPham = (item) => {
    // const listProduct = productFirst.filter((data) => data.danhmuc == item);
    // setListData([...listProduct]);
    setFilters((prevFilters) => ({
      ...prevFilters,
      danhmuc: item,
    }));
  };

  const handleAdd = (item) => {
    // let cartTemp = [...cart.cart1];
    // let kt = 0;
    // cartTemp.map((i) => {
    //   if (i.id === item.id) {
    //     i.count++;
    //     kt = 1;
    //   }
    //   return i;
    // });
    // if (kt === 0) {
    //   cartTemp.push(item);
    // }
    // localStorage.setItem("cart", JSON.stringify([...cartTemp]));
    // cart.setCart([...cartTemp]);
    navigate(`/product-detail/` + item.id);
  };
  useEffect(() => {
    const listProduct = JSON.parse(localStorage.getItem("cart")) ?? [];
    cart.setCart(listProduct);
  }, []);
  return (
    <div className="container">
      <div className="grid">
        <div className="row">
          <div className="col l-2 m-0 c-0">
            <nav className="category">
              <h4 className="category_heading">Danh mục sản phẩm</h4>
              <ul className="category_list">
                <li classname="category_list_item category_item_active">
                  <NavLink onClick={tatcasanpham} className="category_link">
                    Tất Cả
                  </NavLink>
                </li>
                {productFirst
                  ? productFirst.map((item) => {
                      return (
                        <li classname="category_list_item category_item_active">
                          <NavLink
                            onClick={() => loadSanPham(item.name)}
                            className="category_link"
                          >
                            {item.name}
                          </NavLink>
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
                            <div
                              className="product-action"
                              onClick={() => {
                                handleAdd(item);
                              }}
                            >
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
        <Pagination
          style={{
            display: "flex",
            justifyContent: "right",
            marginTop: "10px",
          }}
          count={Math.ceil(19 / paginationS.limit)}
          defaultPage={paginationS.page}
          shape="rounded"
          size="large"
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Sanpham;
