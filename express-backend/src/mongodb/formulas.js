var mongoose = require('mongoose');

// Formulas Schema
var formulaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Formula = module.exports = mongoose.model('Formula', formulaSchema);

// Get Formulas
module.exports.getFormulas = function(callback, limit) {
    Formula.find(callback).limit(limit);
};
