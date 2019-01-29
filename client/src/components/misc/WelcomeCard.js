import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

class WelcomeCard extends Component {
    static contextType = UserContext;

    renderWelcomeMessage = ( value ) => {
        if ( value ) {
            return (
                <h4>Welcome back, {value.name.firstName}!</h4>
            );
        } else {
            return <h4>Welcome back!</h4>
        }
    }


    renderAvatar = ( value ) => {
        if ( value ) {
            return (
                <img 
                    className="welcome-avatar"
                    src={value.image} 
                    alt={`${value.name.firstName}'s avatar`} 
                />
            );
        }
    }


    render() {
        return (
            <div className="card white darken-1">
                <div className="card-content dark-text row">
                    <div className="col s12">
                        <UserContext.Consumer>
                            {(value) => this.renderAvatar( value )}
                        </UserContext.Consumer>
                    </div>
                    <div className="col s12">
                        <UserContext.Consumer>
                            {(value) => this.renderWelcomeMessage( value )}
                        </UserContext.Consumer>
                        <p>Here's your account dashboard. Scroll down to review your current surveys awaiting feedback or create a new one!</p>
                    </div>
                </div>
                <div className="card-action row">
                    <div className="col s12">
                        <p className="right-align">
                            <Link className="red-text" to="/surveys/new">
                                <i className="mini material-icons">add</i>
                                Create New Survey
                            </Link>
                        </p> 
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeCard;

