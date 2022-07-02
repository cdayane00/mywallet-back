import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';



import rotaAut from './routes/autenticaçãoRouter.js';
import rotaReg from "./routes/registrosRouter.js";

const server = express();
server.use(express.json());
server.use(cors());
dotenv.config();


server.use(rotaAut);
server.use(rotaReg);


server.listen(5000, () => {
    console.log("Rodando em http://localhost:5000");
});