const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    firstName: {type : String, required: true},
    lastName : {type: String, required: true},
    email : {type: String, required: true , lowercase : true },
    hash_password: {type: String , required: true}

});
UserSchema.methods.comparefunction = function(password) {
    return bcrypt.compareSync(password , hash_password)
}
module.exports = mongoose.model('User',UserSchema);

