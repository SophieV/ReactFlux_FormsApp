var React = require('react'),
    authenticationService = require('../services/authenticationService'),
    routesConstants = require('../constants/routesConstants');

var Logout = React.createClass({

  statics: {
    willTransitionTo: function (transition) {
      if ( !authenticationService.loggedIn()) {
        transition.redirect(routesConstants.ROOT);
      }
    }
  },

  componentDidMount: function () {
    authenticationService.logout();
  },
  render: function () {
    return <p>You are now logged out</p>;
  }
});

module.exports = Logout;