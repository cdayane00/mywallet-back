import db from "../bancoDeDados.js";

export default async function token(request, response, next){
    const {authorization} = request.headers;
    const token = authorization?.replace('Bearer ', '').trim();

    if(!token){
        return response.status(401).send('Não autorizado');
    }
    try{
        const sessao = await db.collection('sessoes').findOne({token});
        if(!sessao){
            return response.status(401).send('Sessão nao existe');
        }

        const user = await db.collection('usuarios').findOne({_id: sessao.userId});
        if(!user){
            return response.sendStatus(401);
        }
        delete user.password;
        response.locals.user = user;
    }
    catch(erro){
        return response.status(500).send('Token invalido');
    }
    next();
}