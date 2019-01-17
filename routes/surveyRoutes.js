const requireLogin = require( '../middlewares/requireLogin' );
const requireCredits = require( '../middlewares/requireLogin' );

module.exports = app => {

    app.post( '/api/surveys', requireLogin, requireCredits, ( req, res ) => {

    });

};