// SurveyForm displays the form for users to input their content
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';


const FIELDS = [
    { label: 'Survey Title', name: 'title', 
        validationError: 'You must provide a title for your survey.' },
    { label: 'Subject Line', name: 'subject', 
        validationError: 'You must provide a subject for your survey.' },
    { label: 'Email Body', name: 'body', 
        validationError: 'Your survey needs content to show the recipient.' },
    { label: 'Recipient List', name: 'emails', 
        validationError: 'You must provide emails of those you would like to send your survey to.' }
];

class SurveyForm extends Component {

    renderFields() {
        return _.map( FIELDS, ({ label, name }) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        });
    }

    render() {
        return (
            <div>
                <form 
                    onSubmit={this.props.handleSubmit( values => console.log( values ))}
                >
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>

            </div>
        );
    }
}


function validate( values ) {
    const errors = {};

    _.each( FIELDS, ({ name, validationError }) => {
        if ( !values[name] ) {
            errors[name] = validationError;
        }
    });

    return errors;
}



export default reduxForm({
    validate,
    form: 'surveyForm'
})( SurveyForm );
