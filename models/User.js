const mongoose = require( 'mongoose' );
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: {
        type: Number,
        default: 0
    },
    name: {
        firstName: String,
        lastName: String
    },
    image: String,
    email: String,
});


mongoose.model( 'users', userSchema );
