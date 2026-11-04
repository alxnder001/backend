import express from "express";
import bookRoute from './routes/bookRoute.js';
import studentRoute from './routes/studentRoute.js';

const app = express();

app.use('/book', bookRoute);
app.use('/student', studentRoute);

try{
    const port = 3000;
    app.listen(port,() => {
        console.log(`Listening to port ${port}....`);
    });
}catch(e) {
    console.log(e);
}