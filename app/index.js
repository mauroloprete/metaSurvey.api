import express from "express";
import 'dotenv/config';
import './database/connectdb.js'
import authRouter from './routes/auth.route.js'


const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    express.json()
)

app.use(
    '/api/v1', 
    authRouter
);

app.listen(
    PORT,
    () => console.log("Servidor conectado")
);
