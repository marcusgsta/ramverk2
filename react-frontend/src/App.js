import React from 'react';

//images
import expressIcon from './img/express_icon.png';

//routes
import Home from './components/home.js';
import About from './components/about.js';
import Report from './components/report.js';
import LandingPage from './components/landing-page.js';
import { Chat } from './components/chat.js';
import Crud from './components/crud.js';
import Read from './components/read.js';
import Add from './components/add.js';
import Remove from './components/remove.js';
import Update from './components/update.js';

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
                <nav className="site-navbar">
                    <ul>
                        <li><Link to="/">Hem</Link></li>
                        <li><Link to="/om">Om</Link></li>
                        <li><Link to="/report">Redovisningar</Link></li>
                        <li><Link to="/landing-page">Klient/server-app</Link></li>
                        <li><Link to="/chat">Chat</Link></li>
                        <li><Link to="/crud">Crud</Link></li>
                        <li><Link to="/read">Read</Link></li>
                        <li><Link to="/add">Add</Link></li>
                        <li><Link to="/remove">Remove</Link></li>
                        <li><Link to="/update">Update</Link></li>
                    </ul>
                </nav>
            </div>
            <hr/>
            <div className="main">

                <Route exact path="/" component={Home}/>
                <Route path="/om" component={About}/>
                <Route path="/report" component={Report}/>
                <Route path="/landing-page" component={LandingPage}/>
                <Route path="/chat" component={Chat}/>
                <Route path="/crud" component={Crud}/>
                <Route path="/read" component={Read}/>
                <Route path="/add" component={Add}/>
                <Route path="/remove" component={Remove}/>
                <Route path="/update" component={Update}/>
            </div>
            <div className="site-footer">
                Copyright (c) by Marcus Gustafsson
            </div>
        </div>
    </Router>
);

export default Layout;
