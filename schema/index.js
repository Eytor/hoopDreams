const { gql } = require('apollo-server');
const types = require('./types');
const enums = require('./enums');
const inputs = require('./input');
const queries = require('./queries');
const scalar = require('./scalar');
const mutations = require('./mutations');

module.exports = gql`
    ${types}
    ${scalar}
    ${enums}
    ${inputs}
    ${queries}
    ${mutations}
`;