import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thdong98225@gmail.com',
        pass: 'axwc h', //mật khẩu ứng dụng ,mọi người vào quản lý tài khoản=>bảo mật=>xác minh 2 bước(xác minh xong)=>kéo xuống cuối tạo mật khẩu ứng dujng
    },
});

export default transporter