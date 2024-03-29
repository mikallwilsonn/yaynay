import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name="YayNay" 
                description="$5.00 for 5 email credits."  
                amount={500} 
                token={token => this.props.handleToken( token )} 
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="waves-effect waves-light blue btn">Add Credits</button>
            </StripeCheckout>
        );
    }
}


export default connect( null, actions )( Payments );