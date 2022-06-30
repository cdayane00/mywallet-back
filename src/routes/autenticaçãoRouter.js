import { Router } from "express";
import { cadastro } from "../controllers/autenticaçãoController.js";
import cadastroSchemaMiddleware from '../middlewares/cadastroSchemaMiddleware.js';


const rota = Router();
rota.post('/cadastro',cadastroSchemaMiddleware, cadastro);

export default rota;
