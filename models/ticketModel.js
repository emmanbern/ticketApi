var mongoose = require('mongoose');

var {Schema} = mongoose;

const ticketModel = new Schema({
    name: {type:String},
    description: {type:String},
    createdDate: {type:String}, 
    severity: {type:Number}, 
    createdBy:{type:String},
});

module.exports = mongoose.model('Ticket', ticketModel);