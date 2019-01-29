import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSurvey } from '../../actions';

class SurveyDeleteConfirm extends Component {

    componentDidMount() {}

    onDeleteConfirm( id ) {
        if ( this.props.match ) {
            deleteSurvey( id );
        }
    }

    render() {

        const survey = this.props.match.params.ids;
        
        return (
            <div className="card white darken-1">
                <div className="card-content dark-text row">
                    <div className="col s12">
                        <h4>Delete Survey Confirmation</h4>
                    </div>
                    <div className="col s12">
                        <p>Confirm you want to delete the survey.</p>
                    </div>
                </div>
                <div className="card-action row">
                    <div className="col s6">
                        <p className="right-align">
                            <button className="grey lighten-1 btn-flat">Cancel</button>
                        </p> 
                    </div>
                    <div className="col s6">
                        <p className="right-align">
                            <button 
                                className="red white-text btn-flat" 
                                onClick={() => this.props.deleteSurvey( survey )}
                            >
                                Delete Survey <i className="material-icons right">delete</i>
                            </button>
                        </p> 
                    </div>
                </div>
            </div>
        );
    }
}


export default connect( null, { deleteSurvey })( SurveyDeleteConfirm );
