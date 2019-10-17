// Queries (30%)
// All queries should exclude resources which are marked as deleted
    // • (5%) allBasketballFields - Should return a collection of all basketball fields. Contains
    // a field argument called status which is of type BasketballFieldStatus (enum) and
    // should be used to filter the data based on the status of the basketball field
    // • (5%) allPickupGames - Should return a collection of all pickup games
    // • (5%) allPlayers - Should return a collection of all players
    // • (5%) basketballField - Should return a specific basketball field by id
    // • (5%) pickupGame - Should return a specific pickup game by id
    // • (5%) player - Should return a specific player by id

module.exports = `
    type Query {
        allBasketballFields: [BasketballField!]!,
        allPickupGames: [PickupGame!]!,
        allPlayers: [Player!]!,
        basketballField(id: String!): BasketballField!,
        pickupGame(id: String!): PickupGame!,
        player(id: String!): Player!
    }
`;