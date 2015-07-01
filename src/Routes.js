import React from 'react';
import { Router, Route, Link } from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';

class About extends React.Component {
    render() {
        return <div>About</div>;
    }
}

class Inbox extends React.Component {
    render() {
        return <div>Inbox</div>;
    }
}

var App = React.createClass({
    render () {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
});

// https://github.com/rackt/react-router/issues/1332
React.render((
    <Router history={new HashHistory()}>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <Route path="inbox" component={Inbox}/>
        </Route>
    </Router>
), document.getElementById('mount'));