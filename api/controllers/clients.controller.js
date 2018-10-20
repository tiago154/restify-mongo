const clientRepository = require('../repositories/mongodb/client.repository');

exports.get = async (_req, res) => {
    try {
        const client = await clientRepository.getAll();
        return res.send(200, client);
    }
    catch (err) {
        return res.send(500, err);
    }
};

exports.getById = async (req, res) => {
    try {
        const client = await clientRepository.getById(req.params.id);
        res.send(200, client);
    }
    catch (err) {
        return res.send(500, err);
    }
};

exports.post = async (req, res) => {
    try {
        const body = req.body;
        const client = await clientRepository.create(body);
        return res.send(201, client);
    }
    catch (err) {
        return res.send(500, err);
    }
};

exports.put = async (req, res) => {
    try {
        const body = req.body;
        const client = await clientRepository.update(req.params.id, body);
        return res.send(200, client);
    }
    catch (err) {
        return res.status(500).send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        await clientRepository.delete(req.params.id);
        res.send(200, 'Cliente Excluído');
    }
    catch (err) {
        return console.error.bind(console, `Error ${err}`);
    }
};