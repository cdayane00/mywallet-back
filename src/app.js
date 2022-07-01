import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';



import rota from './routes/autenticaçãoRouter.js';

const server = express();
server.use(express.json());
server.use(cors());
dotenv.config();


server.use(rota);


server.listen(5000, () => {
    console.log("Rodando em http://localhost:5000");
});