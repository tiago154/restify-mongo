const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        name: { type: String, required: true },
        mail: { type: String, required: true },
        enable: { type: Boolean, required: true }
    },
    {
        collection: "clients",
        timestamps: true
    }
)

module.exports = mongoose.model('Client', schema);