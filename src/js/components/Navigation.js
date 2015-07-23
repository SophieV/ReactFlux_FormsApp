var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Route = Router.Route,
    Link = Router.Link,
    Login = require('../components/Login'),
    routesConstants = require('../constants/routesConstants'),
    authenticationService = require('../services/authenticationService'),
    Button = require('react-bootstrap/lib/Button');

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
      <div>Hey, <b>{username}</b> ! <Button bsStyle='primary' bsSize='large'><Link to={routesConstants.LOGOUT}>Log out</Link></Button></div> :
      <Login/>;

    return (
        <div>
          <ul>
            <li>{displayLoginOrLogout}</li>
            <li><Link to={routesConstants.HOME_PRIVATE}>My Private Area</Link></li>
          </ul>
          <RouteHandler/>
        </div>
    );
  }

});

module.exports = Navigation;