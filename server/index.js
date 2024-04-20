import express from 'express';
import cors from 'cors';
import connectdb from './utils/db.js';
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"

const app = express();
const port = 8999;
dotenv.config();
connectdb();

app.use(
    cors({
        origin: ['http://localhost:5173', 'http://localhost:5174']
    })
)
app.use(express.json())
app.use('/users',userRoutes)

app.get('/',(req, res) => {
    res.send("Kiwi")
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});