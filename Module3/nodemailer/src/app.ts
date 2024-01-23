import express, { type Express } from 'express'
import transporter from './configs/nodemailer.config';
import { confirmTemplate } from './common/templateConfirm';

const app: Express = express()
app.get('/send', async (req, res) => {
    try {
        const randomNumber = Math.floor(Math.random() * 10000)
        await transporter.sendMail({
            to: 'thdong98225@gmail.com',
            subject: 'Chào mừng bạn đã đăng ký thành công',
            html: confirmTemplate(randomNumber),
        })
        res.json('Email sent successfully!');
    } catch (error) {
        res.status(500).json('Error sending email');
    }
});

app.listen(8000, () => {
    console.log('http://localhost:8000');
})