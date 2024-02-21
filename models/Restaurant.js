const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    title: {type: String, required: true},
    time: {type: String, required: true},
    imageUrl: {type: String, required: true},
    foods: {type: Array},
    pickup: {type: Boolean, required: false, default:  true},
    delivery: {type: Boolean, required: false, default:  true},
    owner: {type: String, required: true},
    isAvailable: {type: Boolean, default: true},
    code: {type: String, required: true},
    logoUrl: {
        type: String,
        required: true,
        default: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1380&t=st=1705022263~exp=1705022863~hmac=7931c4a8a48554737b68ff890c5beac3a96c29ac90f300130a1d4a34e5182c20'
    },
    rating: {type: Number, min:1, max:5 },
    ratingCount: { type: String},
    coords: {
        id: {type: String, required: true},
        latitude: {type: Number, required: true},
        longitude: {type: Number, required: true },
        latitudeDelta: {type: Number, required: true, default: 0.0122 },
        longitudeDelta: {type: Number, required: true, default: 0.0221 },
        address: {type: String, required: true},
        title: {type: String, required: true}
    }
}, {timestamps: true});

module.exports = mongoose.model('Restaurant', restaurantSchema);
