import { Router } from "express";
import token from "../middlewares/tokenMiddleware.js";
import registroMiddleware from "../middlewares/registroMiddleware.js";
import { getRegistros, postRegistros } from "../controllers/usuariosController.js";

const rota = Router();
rota.use(token);
rota.post('/registros',registroMiddleware,postRegistros);
rota.get('/registros',getRegistros);

export default rota;
