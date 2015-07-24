var React = require('react'),
    authenticationService = require('../services/authenticationService'),
    routesConstants = require('../constants/routesConstants');

var LogoutPage = React.createClass({

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
    return <div className="form-box">
              <p>You are now logged out</p>
          </div>;
  }
});

module.exports = LogoutPage;