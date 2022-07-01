import { Router } from "express";
import { cadastro, login, sair } from "../controllers/autenticaçãoController.js";
import cadastroMiddleware from '../middlewares/cadastroMiddleware.js';
import loginMiddleware from "../middlewares/loginMiddlewares.js";


const rota = Router();
rota.post('/cadastro',cadastroMiddleware, cadastro);
rota.post('/login',loginMiddleware, login);
rota.post('/sair', sair);

export default rota;
