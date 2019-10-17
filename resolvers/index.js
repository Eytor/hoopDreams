const { GraphQLScalarType } = require('graphql');
const Moment = require('moment');
require('moment/locale/is'); // Kannski virkar þetta án þessu req.

module.exports = {
    Moment: new GraphQLScalarType({
        name: "Moment",
        description: "icelandic locale",
        parseValue: val => Moment(val).locale('is').format('llll'),
        parseLiteral: val => Moment(val).locale('is').format('llll'),
        serialize: val => Moment(val).locale('is').format('llll'),
    }),
};