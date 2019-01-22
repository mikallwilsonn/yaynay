import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import { Doughnut } from 'react-chartjs-2';


class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    };

    renderSurveys() {
        return this.props.surveys.map( survey => {
            let data = {
                labels: ["Yes", "No"],
                datasets: [{
                    label: 'Responses',
                    data: [survey.yes, survey.no],
                    backgroundColor: [
                        'rgba( 118, 225, 3, 0.75 )',
                        'rgba( 239, 83, 80, 0.75 )',
                    ],
                    borderColor: [
                        'rgba( 118, 225, 3, 1 )',
                        'rgba( 239, 83, 80, 1 )',

                    ],
                    borderWidth: 2
                }]
            }
            return (
                <div className="card white darken-1" key={survey._id}>
                    <div className="card-content dark-text row">
                        <div className="col s12">
                            <span className="card-title">{survey.title}</span>
                        </div>
                        <div className="col s6">
                            <p className="grey-text">Sent {moment(survey.dateSent).fromNow()} on {moment(survey.dateSent).format( "dddd, MMMM Do YYYY" )}</p>
                            <p className="survey__list--body">{survey.body}</p>
                        </div>
                        <div className="col s6">
                            <Doughnut 
                                ref='chart' 
                                data={data} 
                                options={{
                                    maintainAspectRatio: true
                                }}
                            />
                        </div>
                    </div>
                    <div className="card-action row">
                        <div className="col s6">
                            <p className="text-green">Yes: {survey.yes}</p>
                        </div>
                        <div className="col s6">
                            <p className="text-red">No: {survey.no}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
            
        );
    }
}


function mapStateToProps({ surveys }) {
    return { surveys }
}


export default connect( mapStateToProps, { fetchSurveys })( SurveyList );
