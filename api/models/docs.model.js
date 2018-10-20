const options = {
    swaggerDefinition: {
        info: {
            title: 'REST - Swagger',
            version: '1.0.0',
            description: 'REST API with Swagger doc',
            contact: {
                email: 'tiago.toya@hotmail.com'
            }
        },
        // schemes: ['http'],
        // host: 'localhost',
        // basePath: '/'
    },
    apis: [
        '../controllers/clients.controller.js',
        '../models/client.model.js'
    ]
}

module.exports = options;