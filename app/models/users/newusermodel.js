const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    username: {type : String, required: true},
    email : {type: String, required: true },
    hash_password: {type: String}

});
UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password); // Use 'this' to access the user's
}
module.exports = mongoose.model('User',UserSchema);


// UserSchema.methods.comparePassword = function (password) {
//     return bcrypt.compareSync(password, this.hash_password); // Use 'this' to access the user's hashed password
// };

// const User = mongoose.model('User', UserSchema); // Export the model

