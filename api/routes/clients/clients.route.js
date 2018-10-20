const controller = require('../../controllers/clients.controller');
const validator = require('./clients.validators');

module.exports = [
    {
        method: 'get',
        path: '/clientes',
        name: 'clientesGet',
        handler: controller.get
    },
    {
        method: 'get',
        path: '/clientes/:id',
        name: 'clientesGetById',
        handler: controller.getById,
        validation: {
            schema: {
                params: validator.byIdParams
            }
        }
    },
    {
        method: 'post',
        path: '/clientes',
        name: 'clientesPost',
        handler: controller.post,
        validation: {
            schema: {
                body: validator.clientPostBody
            }
        }
    },
    {
        method: 'put',
        path: '/clientes/:id',
        name: 'clientesPut',
        handler: controller.put,
        validation: {
            schema: {
                params: validator.byIdParams
            }
        }
    },
    {
        method: 'del',
        path: '/clientes/:id',
        name: 'clientesDel',
        handler: controller.delete,
        validation: {
            schema: {
                params: validator.byIdParams
            }
        }
    }
]