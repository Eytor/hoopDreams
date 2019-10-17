const mongoose = require('mongoose');
const PickupGameDbSchema = require('./dbSchema/pickupGameDbSchema');
const PlayerDbSchema = require('./dbSchema/playerDbSchema');
const SignupPlayerDbSchema = require('./dbSchema/signupPlayerDbSchema');

const connection = mongoose.createConnection('mongodb+srv://VeftHopur:Lykilord@clusterveft-dwz26.mongodb.net/hoop_dreams', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
    PickupGame: connection.model('PickupGame', artSchema),
    Player: connection.model('Player', artistSchema),
    SignupPlayer: connection.model('SignupPlayer', auctionSchema)
};
