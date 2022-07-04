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


server.listen(process.env.PORT, () => {
    console.log("Rodando em http://localhost:",process.env.PORT );
});