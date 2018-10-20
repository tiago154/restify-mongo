const url = process.env.URL_MONGO || 'localhost';
const database = process.env.MONGO_DATABASE || 'NodeDB';

module.exports = {
    api: {
        port: process.env.PORT || 80
    },
    mongo: {
        connection: `mongodb://${url}/${database}`,
        options: { useNewUrlParser: true },
    },
}