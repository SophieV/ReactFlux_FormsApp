var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Route = Router.Route,
    Link = Router.Link,
    FriendsContainer = require('../components/FriendsContainer'),
    SayHello = require('../components/SayHello'),
    routesConstants = require('../constants/routesConstants'),
    authenticationService = require('../services/authenticationService'),
    Button = require('react-bootstrap/lib/Button');

var MainContainer = React.createClass({

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
      <Button bsStyle='primary' bsSize='large'><Link to={routesConstants.LOGIN}>Sign in</Link></Button>;

    return (
      <div>
        <div>
          <ul>
            <li>{displayLoginOrLogout}</li>
            <li><Link to={routesConstants.HOME_PRIVATE}>My Private Area</Link></li>
          </ul>
          <RouteHandler/>
        </div>
        <br/>
        <br/>
      	<SayHello name="child"/>
        <FriendsContainer name="friends"/>
      </div>
    );
  }

});

module.exports = MainContainer;