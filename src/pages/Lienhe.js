import '../CSS/lienhe.css'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import swal from 'sweetalert';

const Lienhe = () => {
    const form = useRef();
    const handleClick = () => {
        swal("Đã gửi", "    ", "success");
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pvl5ryt', 'template_0vh3qxf', e.target, 'nHsKDrLTiwFEwMbZI'
        ).then(res => {
            console.log(res);

        }).catch(err => console.log(err));
    }

    return (
        <div>
            <div className='container_lienhe'>
                <form className='form_1' ref={form} onSubmit={sendEmail}>
                    <h3>Liên hệ với chúng tôi</h3>
                    <label>Tên</label>
                    <input type='text' id='name' name='name' placeholder='Họ tên' required />
                    <label>Email</label>
                    <input type='text' id='email' name='user_email' placeholder='Email' required />
                    <label>Số điện thoại</label>
                    <input type='text' id='name' name='sdt' placeholder='Số Điện thoại' required />
                    <label>Tin nhắn</label>
                    <textarea id='message' name='message' rows='4' placeholder='Viết gì đó...'></textarea>
                    <button type='submit' onClick={handleClick}>Gửi</button>
                </form>
            </div>
        </div>
    )
}

export default Lienhe