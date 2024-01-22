import express, { type Express } from 'express'
import transporter from './configs/nodemailer.config';

const app: Express = express()

app.get('/send', async (req, res) => {
    try {
        const randomNumber = Math.floor(Math.random() * 10000)
        await transporter.sendMail({
            to: 'thdong98225@gmail.com',
            subject: 'Chào mừng bạn đã đăng ký thành công',
            html: `
                <div>
                    <img src="https://devo.vn/wp-content/uploads/2023/01/meo-buon-ba.jpg" />
                    <h1 style='color:yellow'>Chào mừng đã đăng ký</h1>
                    <p>Mã xác nhận <strong>${randomNumber}</strong></p>
                </div>
            `
        })
        res.json('Email sent successfully!');
    } catch (error) {
        res.status(500).json('Error sending email');
    }
});

app.listen(8000, () => {
    console.log('http://localhost:8000');
})