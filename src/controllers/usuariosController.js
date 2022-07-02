import dotenv from 'dotenv';
import db from '../bancoDeDados.js';
dotenv.config();

export async function postRegistros(request, response){
    const {user} = request.locals;
    const registros = request.body;

    try{
        await db.collection('registros').insertOne({...registros, userId: user._id});
        response.sendStatus(200);
    }
    catch(erro){
        console.log(erro);
    }
}

export async function getRegistros(request, response){
    const {user} = request.locals;

    const registros = await db.collection('registros').find({userId: user._id,}).toArray();
    registros.forEach((registro) => delete registro.userId);
    
    response.send(registros);
}


