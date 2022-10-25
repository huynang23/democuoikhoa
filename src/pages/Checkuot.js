import React, { useEffect, useState } from 'react'
import '../CSS/checkuot.css'
import swal from 'sweetalert';
import { useContext } from 'react';
import { CtxCart } from "../App";
import { useNavigate } from 'react-router-dom';

const Checkuot = () => {
    const cart = useContext(CtxCart);
    const navigate = useNavigate();
    console.log(cart)
    const [data, setData] = useState([])
    useEffect(()=>{
      fetch('https://633ae702e02b9b64c61a63ba.mockapi.io/api/v1/quanao/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
    setData(data)
        // setListDanhmuc(unique(data));
        // setListProductFirst(data);
      });
    },[])
    let size
    const handleCheckout =()=>{
      swal("Đặt hàng thành công", "    ", "success");
      navigate('/')
      
      for(let j=0;j<data.length;j++){
        for(let i=0;i<cart.cart1.length;i++){
          if(data[j].id===cart.cart1[i].id){
             fetch(
                `https://633ae702e02b9b64c61a63ba.mockapi.io/api/v1/quanao/` + cart.cart1[i].id,
                {
                  method: 'PUT',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    soluong:data[j].soluong - cart.cart1[i].count,
                  }),
                }
              )
                .then((response) => {
                  response.json().then((response) => {
                  
                  });
                })
                .catch((err) => {
                  console.error(err);
                });
              }
          }
              
            
      }
      
    }
    // tinh tong tien
    const tongtien = () => {
        let tongtien = 0;
        cart.cart1.map((item) => {
          tongtien += item.count * item.gia;
        });
        return tongtien;
      };

  return (
    <div><main>
    <div className="container">
      <div className="payment-info">
        <div className="payment-header">
        
          <h3 >Thông tin giao hàng</h3>
          
        </div>
        <div className="payment-f">
          
            <div className="field">
              <label htmlFor="name">Họ và tên</label>
              <input type="text" placeholder="Nhập họ và tên!" className="name" />
            </div>
            <div className="field">
              <div className="field-2">
                <div className="field-left">
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder="Nhập email để nhận thông báo!" className="email" />
                </div>
                <div className="field-right">
                  <label htmlFor="tel">Số điện thoại</label>
                  <input type="text" placeholder="Nhập số điện thoại nhận hàng" className="tel" />
                </div>
              </div>
            </div>
            <div className="field">
              <label htmlFor="address">Địa chỉ</label>
              <input type="text" placeholder="Số nhà, đường,..." className="address" />
            </div>
            <div className="field">
              <label htmlFor="message">Lời nhắn</label>
              <textarea placeholder="Ghi chú!" className="message" defaultValue={""} />
            </div>
            <div className="field selection">
              <select name="calc_shipping_provinces" required className="city" id="city">
                <option value>Tỉnh / Thành phố</option>
              </select>
              <select name="calc_shipping_district" required className="district" id="district">
                <option value>Quận / Huyện</option>
              </select>
              <input className="billing_address_1" name type="hidden" defaultValue />
              <input className="billing_address_2" name type="hidden" defaultValue />
            </div>
            <h3 className='thanhtoan'>Phương thức thanh toán</h3>
            <div className="field">
              <div className="field-2">
                <div className="field-left-1">
                  <input type="radio" name="method" id="payment_card" defaultValue="code" />
                </div>
                <div className="field-right-1">
                  <label htmlFor className='thanhtoan'>Thanh toán khi nhận hàng</label>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="field-2">
                <div className="field-left-1">
                  <input type="radio" name="method" id="payment_card" defaultValue="card" />
                </div>
                <div className="field-right-1">
                  <label htmlFor className='thanhtoan'>Thanh toán qua thẻ tín dụng</label>
                </div>
              </div>
            </div>
            <div className="payment-action">
              <button type="submit" className="btn-submit-payment" onClick={handleCheckout} >Hoàn tất đơn hàng</button>
            </div>
        </div>
      </div>
      <div className="slide-bar">
        <div className="product-list underline">

          {
            cart.cart1.map((item)=>{
                return(
                    <div className="product-item">
                    <img src={item.hinhanh} alt=""/>
                    <div className="product-info">
                        <p className="product-name">{item.tensp}</p>
                        <p className="product-type">Kích Thước:{item.size}</p>
                        <p className="product-amount">Số Lượng:{item.count}</p>
                    </div>
                    <h3>{new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.gia * item.count)}</h3>
                </div>
                )
            })
          }

          {/* <div class="product-item">
                    <img src="http://smakerclothing.com/upload/hinhthem/img5986-32273184_300x300.jpg" alt="">
                    <div class="product-info">
                        <p class="product-name">Bazic Tee v2.0 / Green</p>
                        <p class="product-type">Loại:Sữa</p>
                        <p class="product-amount">Số lượng:3</p>
                    </div>
                    <h3>180.000VNĐ</h3>
                </div>
                <div class="product-item">
                    <img src="http://smakerclothing.com/upload/hinhthem/img5986-32273184_300x300.jpg" alt="">
                    <div class="product-info">
                        <p class="product-name">Bazic Tee v2.0 / Green</p>
                        <p class="product-type">Loại:Sữa</p>
                        <p class="product-amount">Số lượng:3</p>
                    </div>
                    <h3>180.000 VNĐ</h3>
                </div>
                <div class="product-item">
                    <img src="http://smakerclothing.com/upload/hinhthem/img5986-32273184_300x300.jpg" alt="">
                    <div class="product-info">
                        <p class="product-name">Bazic Tee v2.0 / Green</p>
                        <p class="product-type">Loại:Sữa</p>
                        <p class="product-amount">Số lượng:3</p>
                    </div>
                    <h3>180.000VNĐ</h3>
                </div> */}
        </div>
       
          {/* <p class="">Áp dụng mã giảm giá thành công</p> */}
      
        <div className="billing-amount underline">
          <div className="billing-cost">
            <h3>Tạm tính:</h3>
            <span className="temporary-amount">{new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(tongtien())} </span>
          </div>
          
          <div className="billing-cost">
            <h3>Vận chuyển:</h3>
            <span className="transport-amount">30000 đ</span>
          </div>
        </div>
        <div className="billing-total">
          <h1>Tổng cộng:</h1>
          <span className="billing-final">{new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(tongtien()+30000)}</span>
        </div>
      </div>
    </div>
  </main>
  </div>
  )
}

export default Checkuot