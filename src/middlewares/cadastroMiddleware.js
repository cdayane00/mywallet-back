import {cadastro} from '../schemas.js';

export default function cadastroMiddleware(request, response, next){
    const valida = cadastro.validate(request.body, {abortEarly: false});

    if(valida.error){
        return response.status(400).send(valida.error.details.map((erro) => erro.message));
    }
    next();
}