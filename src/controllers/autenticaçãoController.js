import dotenv from 'dotenv';
import db from '../bancoDeDados.js';
dotenv.config();

export async function cadastro(request, response){
    const {name, email, password} = request.body;

    try{
        const user = await db.collection('usuarios').findOne({email});
        if(user){
            return response.status(404).send({message: 'Este usuário já está cadastrado'});
        }
        const novoUser = await db.collection('usuarios').insertOne({
            name, email, password
        });
        response.status(200).send({message: 'Usuário cadastrado'});
    }
    catch(erro){
        console.log(erro);
    }
}