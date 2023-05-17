const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;