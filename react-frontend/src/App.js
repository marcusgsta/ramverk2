import React from 'react';

//images
import expressIcon from './img/express_icon.png';

//routes
import Home from './components/home.js';
import About from './components/about.js';
import Report from './components/report.js';
import LandingPage from './components/landing-page.js';

//router
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// class Layout extends React.Component {
//     constructor(props) {
//         super(props);
//         document.title = this.props.title;
//     }
//     render() {
//         return (
//             <div>
//             </div>
//         );
//     }
// }

const Layout = () => (
    <Router>
        <div>
            <div className="site-header">
                <img id="icon" alt="express icon" src={expressIcon} />
                <navbar className="site-navbar">
                    <nav>
                        <ul>
                            <li><Link to="/">Hem</Link></li>
                            <li><Link to="/om">Om</Link></li>
                            <li><Link to="/report">Redovisningar</Link></li>
                            <li><Link to="/landing-page">Klient/server-app</Link></li>
                        </ul>
                    </nav>
                </navbar>
            </div>
            <hr/>
            <div className="main">

                <Route exact path="/" component={Home}/>
                <Route path="/om" component={About}/>
                <Route path="/report" component={Report}/>
                <Route path="/landing-page" component={LandingPage}/>
            </div>
            <div className="site-footer">
                Copyright (c) by Marcus Gustafsson
            </div>
        </div>
    </Router>
);

export default Layout;
