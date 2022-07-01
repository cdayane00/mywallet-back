import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import chalk from 'chalk';
dotenv.config();

const cliente = new MongoClient('mongodb://127.0.0.1:27017');
let db = null;

try{
    await cliente.connect();
    db = cliente.db('mywallet-api');
    console.log(chalk.bold.red('conectado com o banco de dados em mywallet-api'));
}
catch(erro){
    console.log(chalk.bold.red('erro ao conectar ao banco de dados', erro));
}

export default db;
