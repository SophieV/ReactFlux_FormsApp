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
        <div>
          <Navbar brand='Trying React with Flux'>
            <Nav>
              <NavItemLink to={routesConstants.SOMETHING}>Nested Generated Form</NavItemLink>
              <NavItemLink to={routesConstants.HOME_PRIVATE}>My Private Area</NavItemLink>
              { this.state.loggedIn ? <li><p className="navbar-text">Logged in as <b>{username}</b></p></li> : null }
              { this.state.loggedIn ? <li><ButtonLink to={routesConstants.LOGOUT}>Log out</ButtonLink></li> : <Login/> }
            </Nav>
          </Navbar>
        </div>
    );
  }

});

module.exports = Navigation;