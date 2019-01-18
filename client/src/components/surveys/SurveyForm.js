// SurveyForm displays the form for users to input their content
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';


class SurveyForm extends Component {
    render() {
        return (
            <div>
                <h2>SurveyForm</h2>
            </div>
        );
    }
}


export default reduxForm({
    form: 'surveyForm'
})( SurveyForm );
