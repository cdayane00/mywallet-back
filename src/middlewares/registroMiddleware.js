import { registroSchema } from "../schemasRegistro.js";

export default function registroMiddleware(request, response, next){
    const valida = registroSchema.validate(request.body, {abortEarly: false});
    if(valida.error){
        return response.status(400).send(valida.error.details.map((erro) => erro.message));
    }
    next();
}