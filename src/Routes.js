import React from 'react';
import { Link } from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';

class About extends React.Component {
    render() {
        return <div>About</div>;
    }
}

class Spam extends React.Component {
    render() {
        return <div>Spam</div>;
    }
}

class Inbox extends React.Component {
    render() {
        return <div>
            <div>Inbox</div>
            <div>
                Children of Inbox:
                {this.props.children}
            </div>
        </div>;
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                    <li><Link to="/inbox/spam">Spam</Link></li>
                </ul>
                <div>
                    Children of App:
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const routes = {
    path: '/',
    component: App,
    childRoutes: [
        {path: 'about', component: About},
        {
            path: 'inbox', component: Inbox, childRoutes: [{path: 'spam', component: Spam}]
        }
    ]
};

export default routes;