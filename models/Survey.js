const mongoose = require( 'mongoose' );
const { Schema } = mongoose;

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [String],
    yes: Number,
    no: Number
});

mongoose.model( 'surveys', surveySchema );
