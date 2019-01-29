import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import WelcomeCard from './misc/WelcomeCard';

const Dashboard = () => {

    return (
        <div>
            <WelcomeCard />
            <SurveyList />
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="large material-icons">add</i>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard;
