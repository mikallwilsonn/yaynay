const mongoose = require( 'mongoose' );
const requireLogin = require( '../middlewares/requireLogin' );
const requireCredits = require( '../middlewares/requireLogin' );

const Survey = mongoose.model( 'surveys' );

module.exports = app => {

    app.post( '/api/surveys', requireLogin, requireCredits, ( req, res ) => {

        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title, 
            subject, 
            body, 
            recipients: recipients.split( ',' ).map( email => ({ email })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        survey.save();
    });

};