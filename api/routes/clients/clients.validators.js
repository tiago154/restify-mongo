const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

exports.byIdParams = Joi.object().keys({
    id: Joi.objectId().required()
});

exports.clientPostBody = Joi.object().keys({
    name: Joi.string().min(4).max(30).required(),
    mail: Joi.string().email().required(),
    enable: Joi.boolean().required()
});