import React from 'react'
import '../CSS/gioithieu.css'

const Gioithieu = () => {
  return (
    <div className="about">
      <hr/>
      <h1> Câu Chuyện Về NowSaigon</h1>
    <img className='img_about' src="https://www.celeb.vn/wp-content/uploads/2021/09/nowsg.jpg" alt=""/>
    <br />
    <p>
    Now sinh ra với mong muốn trở thành điển hình về mô hình DOANH NGHIỆP TRÁCH NHIỆM bằng cách vừa làm kinh doanh bài bản, 
    có lợi nhuận và đồng thời mang lại những giá trị thiết thực và lâu dài cho khách hàng, 
    cho nhân viên, cho đối tác, cho cộng đồng, xã hội và cho cổ đông"
    </p>
    <br />
    <p>
    Now sẽ mở rộng hơn các sản phẩm, dịch vụ xoay quanh nhu cầu của nam giới. Nên một ngày đẹp trời,
     nếu như mà bạn tìm thấy một đôi giày, bộ dao cạo râu,
     hay một lọ lăn khử mùi hay thậm chí là những chiếc bao cao su chất lượng ở Website thì cũng đừng ngạc nhiên nhé.
    </p>
    <br />
<hr/>
    <h3>Một số video của chúng tôi</h3>
    <br />
    <div className="videos">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/mgzlmgfLL5M" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/sKVLpiI1xEU" title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>

      
<iframe width="560" height="315" 
src="https://www.youtube.com/embed/glAYxUB7T8E" title="YouTube video player" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen>
</iframe>

    </div>
  </div>
  )
}

export default Gioithieu