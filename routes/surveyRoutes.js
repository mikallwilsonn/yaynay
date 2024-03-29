const _ = require( 'lodash' );
const { Path } = require( 'path-parser' );
const { URL } = require( 'url' );
const mongoose = require( 'mongoose' );
const requireLogin = require( '../middlewares/requireLogin' );
const requireCredits = require( '../middlewares/requireLogin' );
const Mailer = require( '../services/Mailer' );
const surveyTemplate = require( '../services/emailTemplates/surveyTemplate' );

const Survey = mongoose.model( 'surveys' );

module.exports = app => {

    app.get( '/api/surveys/:survey_id/:choice', ( req, res ) => {
        res.send( 'Thanks for voting!' );
    });


    app.post( '/api/surveys', requireLogin, requireCredits, async ( req, res ) => {

        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title, 
            subject, 
            body, 
            recipients: recipients.split( ',' ).map( email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        const mailer = new Mailer( survey, surveyTemplate( survey ));

        try {
            await mailer.send();

            await survey.save();

            req.user.credits -=1;
            const user = await req.user.save();

            res.send( user );
        } catch ( err ) {
            res.satus( 422 ).send( err );
        }
    });


    app.post( '/api/surveys/webhooks', ( req, res ) => {
        const p = new Path( '/api/surveys/:survey_id/:choice' );
       
        _.chain( req.body )
            .map(({ email, url }) => {
                const match = p.test( new URL( url ).pathname );
                if ( match ) {
                    return { email, survey_id: match.survey_id, choice: match.choice }
                }
            })
            .compact()
            .uniqBy('email', 'survey_id' )
            .each(({ survey_id, email, choice }) => {
                Survey.updateOne({
                    _id: survey_id,
                    recipients: {
                        $elemMatch: { 
                            email: email, 
                            responded: false 
                        }
                    }
                }, {
                    $inc: { [choice]: 1 },
                    $set: { 'recipients.$.responded': true },
                    lastResponded: new Date()
                }).exec();
            })
            .value();

        res.send({ });
    });


    app.get( '/api/surveys', requireLogin, async ( req, res ) => {
        const surveys = await Survey
            .find({ _user: req.user._id })
            .select({ recipients: false })
            .sort({ dateSent: 'desc' });
        res.send( surveys );
    });


    app.post( '/api/surveys/delete', async ( req, res ) => {
        await Survey.deleteOne({ _id: req.body.id });
        res.send( {} );
    });

};