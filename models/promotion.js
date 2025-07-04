const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

require('mongoose-currency').loadType(mongoose); 
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        unique: true
    }, 
    image: {
        type: String,
        required: true
    }, 
    featured: {
        type: Boolean, 
        default: false
    }, 
    description: {
        type: String, 
        required: true
    }, 
    cost: {
        type: Currency, 
        required: true, 
        min: 0
    }
}, {
    timestamps: true
})

const Promotion = mongoose.model('Promotion', promotionSchema)

module.exports = Promotion;