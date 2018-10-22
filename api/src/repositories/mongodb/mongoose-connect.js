const mongoose = require('mongoose');
const config = require('../../config');

mongoose.createConnection = () => {
    if (!mongoose.connection.readyState) {
        return mongoose.connect(config.mongo.connection, config.mongo.options)
            .then(() => console.log('Connected to MongoDB'))
            .catch((error) => setTimeout(mongoose.createConnection, 3000));
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB connection disconnected...');
    return setTimeout(mongoose.createConnection, 10000);
});

module.exports = mongoose;