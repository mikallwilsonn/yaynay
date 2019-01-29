import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import UserContext from '../contexts/UserContext';
import axios from 'axios';


class App extends Component {

    state = { user: '' }

    componentDidMount() {
        this.props.fetchUser();
        this.getUser();
    }

    getUser = async () => {
        const response = await axios.get( '/api/current_user' );
        this.setState({ user: response.data });
    }

    render() {
        return (
            <div className="app-wrapper">
                <UserContext.Provider value={this.state.user}>
                    <BrowserRouter>
                        <div>
                            <Header />
                            
                            <div className="container">
                                <Route exact path="/" component={Landing} />
                                <Route exact path="/surveys" component={Dashboard} />
                                <Route exact path="/surveys/new" component={SurveyNew} />
                            </div>

                            <Footer />
                        </div>
                    </BrowserRouter>
                </UserContext.Provider>
            </div>
        );
    }
};


export default connect( null, actions )( App );
