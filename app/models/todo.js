var mongoose = require('mongoose');

var TodoSchema =  new mongoose.Schema({
    text : {type : String, default: ''}
    completedTask : {type : Boolean, default: false}
    snoozeMarked : {type : Boolean, default: false}
});

module.exports = mongoose.model('Todo', TodoSchema);
