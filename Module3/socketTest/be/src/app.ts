import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000']
    },
});
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

io.on('connection', (socket: Socket) => {
    console.log('Client connected', socket.id);

    socket.on('blockUser', (userId: any) => {
       console.log(userId);
        io.emit('logout', userId.userId);
    });

    socket.on('msg', () => {
        //logic xử lí sự kiện msg
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
