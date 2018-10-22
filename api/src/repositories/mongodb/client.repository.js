const Client = require('../../models/client.model');

module.exports = new class ClientRepository {
    getAll() {
        return Client.find();
    }

    getById(id) {
        return Client.findById(id);
    }

    create(client) {
        return Client.create(client);
    }

    update(id, client) {
        const updatedClient = {
            name: client.name,
            mail: client.mail,
        }
        return Client.findOneAndUpdate(id, updatedClient, { new: true });
    }

    delete(id) {
        return Client.findOneAndDelete(id);
    }
}