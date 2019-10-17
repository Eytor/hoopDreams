const PickupGameMutations = require('./pickupGameMutations');
const PlayerMutations = require('./playerMutations');
const SignupPlayerMutations = require('./signupPlayerMutations');

module.exports = `
    type Mutation {
        ${PickupGameMutations}
        ${PlayerMutations}
        ${SignupPlayerMutations}
    }
`;
