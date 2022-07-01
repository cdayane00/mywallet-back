import {login} from '../schemas.js';

export default function loginMiddleware(request, response, next){
    const valida = login.validate(request.body, {abortEarly: false});

    if(valida.error){
        return response.status(400).send(valida.error.details.map((erro) => erro.message));
    }
    next();
}