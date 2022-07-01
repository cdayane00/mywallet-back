import { Router } from "express";
import { cadastro, login } from "../controllers/autenticaçãoController.js";
import cadastroMiddleware from '../middlewares/cadastroMiddleware.js';
import loginMiddleware from "../middlewares/loginMiddlewares.js";


const rota = Router();
rota.post('/cadastro',cadastroMiddleware, cadastro);
rota.post('/login',loginMiddleware, login);

export default rota;
