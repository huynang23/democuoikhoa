import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div id="contact-note">
      <div className="grid">
        <div className="contact-text">
          <i className="fa-solid fa-square-phone-flip" />
          <h3>Hỗ trợ/ Mua hàng: <a href>0981542102</a></h3>
        </div>
      </div>
    </div>
    <div className="grid">
      <div className="footer-section">
        <div className="footer-section_content">
          <div className="footer-section_content_item footer_width">
            <h3 className="footer-title">Giới thiệu</h3>
            <p>Levents® – Popular Streetwear Brand HỘ KINH DOANH Levents</p>
          </div>
          <div className="footer-section_content_item footer_width" style={{marginLeft: '30px'}}>
            <h3 className="footer-title">Liên kết</h3>
            <a href style={{color: 'black'}}>Giới thiệu</a><br />
            <a href style={{color: 'black'}}>Chính sách đổi trả</a><br />
            <a href style={{color: 'black'}}>Chính sách bảo mật</a><br />
            <a href style={{color: 'black'}}>Điều khoản dịch vụ</a><br />
          </div>
          <div className="footer-section_content_item footer_width">
            <h3>Thông tin liên hệ</h3>
            <div>
              <p>
                <i className="fa-solid fa-location-dot" /> 134 Trương Định,
                Hai Bà Trưng,Hà Nội
              </p>
              <p><i className="fa-solid fa-phone" /> 0981542102</p>
              <p><i className="fa-solid fa-building" /> Coming soon</p>
              <p><i className="fa-brands fa-telegram" /> nhom3@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer