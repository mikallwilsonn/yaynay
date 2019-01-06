const keys = require( '../config/keys' );
const stripe = require( 'stripe' )( keys.stripeSecretKey );
const mongoose = require( 'mongoose' );
const User = mongoose.model( 'users' );

module.exports = app => {

    app.post( '/api/stripe', async ( req, res ) => {

        if ( !req.user ) {
            return res.status( 401 ).send({ error: 'You must be logged into an account.' });
        }

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'Purchase of 5 credits for account',
            source: req.body.id
        });

        req.user.credits += 5;
        const user = await req.user.save();

        res.send( user );

    });

}