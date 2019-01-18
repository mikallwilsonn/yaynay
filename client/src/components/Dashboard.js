import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h3>Fuckin' Dashboard</h3>
            <div class="fixed-action-btn">
                <a href="/api/surveys/new" class="btn-floating btn-large red">
                    <i class="large material-icons">add</i>
                </a>
            </div>
        </div>
    )
}

export default Dashboard;