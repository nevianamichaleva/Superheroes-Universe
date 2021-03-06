/* globals require module */

const modelRegistrator = require("./utils/model-registrator");

module.exports = modelRegistrator.register("Fraction", {
    name: {
        type: String,
        required: true,
        unique: true
    },
    alignment: {
        type: String,
        required: true
    },
    superheroes: [{}],
    cities: [{}],
    planets: [{}]
});