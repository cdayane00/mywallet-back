import JoiBase from 'joi';
import JoiDate from '@joi/date';

const joi = JoiBase.extend(JoiDate);

const registroSchema = joi.object({
    value: joi.number().required(),
    description: joi.string().required(),
    date: joi.date().format('DD/MM').required(),
    type: joi.valid('entrada', 'saida').required()
});

export {registroSchema};
