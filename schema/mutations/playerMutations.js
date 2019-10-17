// (5%) createPlayer - Create a player and returns the newly created player matching
// the Player type
// (5%) updatePlayer - Updates a player by id and returns the updated player matching
// the Player type
// (5%) removePlayer - Marks a player as deleted and returns either true or an error if
// something happened


module.exports = `
    createPlayer(input: PlayerInput!): Player!
    createPlayer(id: String! input: PlayerInput!): Player!
    removePlayer(id: String!): Boolean!
`;