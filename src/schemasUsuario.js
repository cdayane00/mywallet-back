import joi from "joi";

const cadastro = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
});

const login = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export {cadastro, login};