var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Route = Router.Route,
    Link = Router.Link,
    Login = require('./LoginComponent'),
    routesConstants = require('../constants/routesConstants'),
    authenticationService = require('../services/authenticationService'),
    Button = require('react-bootstrap/lib/Button'),
    HighlightedLink = require('./HighlightedLink');

var Navigation = React.createClass({

  getInitialState: function () {
    return {
      loggedIn: authenticationService.loggedIn()
    };
  },

  setStateOnAuth: function (loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  },

  componentWillMount: function () {
    authenticationService.onChange = this.setStateOnAuth;
    authenticationService.login();
  },

  render: function () {
    var username = authenticationService.getUsername();

    var displayLoginOrLogout = this.state.loggedIn ?
      <div>Hey, <b>{username}</b> ! <HighlightedLink to={routesConstants.LOGOUT}><Button bsStyle='primary' bsSize='large'>Log out</Button></HighlightedLink></div> :
      <Login/>;

    return (
        <div className="form-box">
          <ul>
            <li>{displayLoginOrLogout}</li>
            <li><HighlightedLink to={routesConstants.SOMETHING}>My Other Area</HighlightedLink></li>
            <li><HighlightedLink to={routesConstants.HOME_PRIVATE}>My Private Area</HighlightedLink></li>
          </ul>
          <RouteHandler/>
        </div>
    );
  }

});

module.exports = Navigation;