import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

class Footer extends Component {
    render () {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">YayNay</h5>
                            <p className="grey-text text-lighten-4">YayNay is the perfect option for quickly getting 'Yes' or 'No' answers from your users.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <ul>
                                <li>
                                    <Link className="grey-text text-lighten-3" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className="grey-text text-lighten-3" to="/surveys">
                                        Dashboard
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2019 YayNay
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
