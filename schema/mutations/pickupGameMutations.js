// (5%) createPickupGame - Creates a pickup game and returns the newly created
// pickup game matching the PickupGame type
// (5%) removePickupGame - Marks a pickup game as deleted and returns either true
// or an error if something happened

module.exports = `
    createPickupGame(input: PickupGameInput!): PickupGame!
    removePickupGame(id: String!): Boolean!
`;
