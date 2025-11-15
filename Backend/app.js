const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./utils/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3001', // frontend URL
    credentials: true, // to allow cookies to be sent
}));

const authrouter = require('./routers/auth');
const projectRouter = require('./routers/projects');
const messageRouter = require('./routers/message');
const fileRouter = require('./routers/files');
const invoiceRouter = require('./routers/invoices');
const meetingRouter = require('./routers/meeting');
const notificationRouter = require('./routers/notification');
const errorHandle = require('./middleware/errorHandle');
const contactRouter = require('./routers/contact')
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authrouter);
app.use('/api/contact',contactRouter)
app.use('/api/projects',projectRouter);
app.use('/api/messages',messageRouter);
app.use('/api/profile', fileRouter);
app.use('/api/invoices', invoiceRouter);
app.use('/api/meetings', meetingRouter);
app.use('/api/notifications', notificationRouter);
app.use(errorHandle);

const PORT = 3000;

connectDB().then(() => {
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
});