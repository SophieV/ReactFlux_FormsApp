var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Route = Router.Route,
    Link = Router.Link,
    Login = require('./LoginComponent'),
    routesConstants = require('../constants/routesConstants'),
    authenticationService = require('../services/authenticationService'),
    Button = require('react-bootstrap/lib/Button'),
    Label = require('react-bootstrap/lib/Label'),
    Navbar = require('react-bootstrap/lib/Navbar'),
    Nav = require('react-bootstrap/lib/Nav'),
    ReactRouterBootstrap = require('react-router-bootstrap'),
    NavItemLink = ReactRouterBootstrap.NavItemLink,
    ButtonLink = ReactRouterBootstrap.ButtonLink;

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

    return (
        <div className="form-box">
        <Navbar brand='ReactFlux Sandbox'>
          <Nav>
            <NavItemLink to={routesConstants.SOMETHING}>My Nested Generated Form Example</NavItemLink>
            <NavItemLink to={routesConstants.HOME_PRIVATE}>My Private Area</NavItemLink>
            { this.state.loggedIn ? <p className="navbar-text">Logged in as <b>{username}</b></p> : null }
            { this.state.loggedIn ? <ButtonLink to={routesConstants.LOGOUT}>Log out</ButtonLink> : <ButtonLink to={routesConstants.LOGIN}>Log in</ButtonLink> }
          </Nav>
        </Navbar>
        <RouteHandler/>
        </div>
    );
  }

});

module.exports = Navigation;