import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

class Footer extends Component {
    render () {
        return (
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Emaily</h5>
                            <p class="grey-text text-lighten-4">Emaily is the perfect option for quickly checking in with your users.</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <ul>
                                <li>
                                    <a class="grey-text text-lighten-3" href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a class="grey-text text-lighten-3" href="/surveys">
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a class="grey-text text-lighten-3" href="/help">
                                        Help
                                    </a>
                                </li>
                                <li>
                                    <a class="grey-text text-lighten-3" href="/logout">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2019 Emaily
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
