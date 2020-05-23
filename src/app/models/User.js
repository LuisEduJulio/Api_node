const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: String,
    role: {
        type: String,
        default: 'user'
    }
}, {
    timestamps:true
},
{ 
    collection: 'User' 
})

UserSchema.methods.getJson = function(){
    return{
        _id:this._id,
        name:this.name,
        email:this.email,
        role:this.role
    }
}

module.exports = mongoose.model('User', UserSchema);