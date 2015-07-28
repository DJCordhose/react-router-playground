import React from 'react';
import { Link, Route, Redirect, Navigation } from 'react-router';


class NoMatch extends React.Component {
    render() {
        return <div>404</div>;
    }
}

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

class Message extends React.Component {
    render() {
        return <div>Message: {this.props.params.id}</div>;
    }
}

class Inbox extends React.Component {
    render() {
        return <div>
            <div>Inbox</div>
            <div>
                Children of Inbox:
                {this.props.children || "Welcome to your Inbox"}
            </div>
        </div>;
    }
}

class App extends React.Component {
    static get contextTypes() {
        return {
            router: React.PropTypes.object.isRequired
        };
    }
    gotoAbout() {
      this.context.router.transitionTo('/about');
    }
    render() {
      const messageId = 48;
      const path = `/inbox/message/${messageId}`;
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                    <li><Link to="/inbox/spam">Spam</Link></li>
                    <li><Link to={path}>My Message</Link></li>
                </ul>
                <div>
                    Children of App:
                    {this.props.children}
                </div>
                <div onClick={this.gotoAbout.bind(this)}>Go to About</div>
                <div onClick={() => this.context.router.replaceWith('/inbox')}>Go to Inbox without creating a new history entry</div>
                <div onClick={() => this.context.router.goBack()}>Go back</div>
            </div>
        )
    }
}
let loggedIn = false;

// http://rackt.github.io/react-router/tags/v1.0.0-beta3.html#Navigation
const Login = React.createClass({
   mixins: [Navigation],
   login() {
       loggedIn = true;
       this.transitionTo('/inbox/spam');
   },

   render() {
       return (<div>
               <div>Login</div>
               <button onClick={this.login}>Login</button>
           </div>
       );
   }
});

// OR

// class Login extends React.Component {
//     static get contextTypes() {
//         return {
//             router: React.PropTypes.object.isRequired
//         };
//     }
//
//     constructor(props) {
//         super(props);
//         this.login = this.login.bind(this);
//     }
//
//     login() {
//         loggedIn = true;
//         this.context.router.transitionTo('/inbox/spam');
//     }
//
//     render() {
//         return (<div>
//                 <div>Login</div>
//                 <button onClick={this.login}>Login</button>
//             </div>
//         );
//     }
// }


function requireAuth(nextState, transition) {
    if (!loggedIn) {
        transition.to('/login')
    }
}

// TODO:
// - Routes als React-Komponenten
// - Step by step creating a login


const routes = (<Route path="/" component={App}>
    <Route path="about" component={About}/>
    <Route path="login" component={Login}/>
    <Route path="inbox" component={Inbox}>
        <Route path="spam"
               component={Spam}
               onEnter={requireAuth}
            />
        <Route path="message/:id" component={Message}/>
    </Route>
    <Route path="*" component={NoMatch}/>

</Route>);

// OR

//const routes = {
//    path: '/',
//    component: App,
//    childRoutes: [
//        {path: 'about', component: About},
//        {path: 'login', component: Login},
//        {
//            path: 'inbox',
//            component: Inbox,
//            childRoutes: [
//                {path: 'spam', component: Spam, onEnter: requireAuth},
//                {path: 'message/:id', component: Message}
//            ]
//        },
//        {path: '*', component: NoMatch}
//    ]
//};

export default routes;
