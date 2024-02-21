const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    uid: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String, required: false},
    phone: {type: String, required: false},
    userType: {type: String, required: true, default: "Client", enum: ['Admin', 'Driver', 'Client', 'Vendor']},
    profile: {
        type: String,
        required: true,
        default: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1380&t=st=1705022263~exp=1705022863~hmac=7931c4a8a48554737b68ff890c5beac3a96c29ac90f300130a1d4a34e5182c20'
    }
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);
