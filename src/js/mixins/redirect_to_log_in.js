var authenticationService = require('../services/authenticationService'),
    Login = require('../components/Login'),
    routesConstants = require('../constants/routesConstants');

var RedirectToLogInMixin = {
  statics: {
    willTransitionTo: function (transition) {
      if (!authenticationService.loggedIn()) {
        Login.attemptedTransition = transition;
        transition.redirect(routesConstants.LOGIN);
      }
    }
  }
};

module.exports = RedirectToLogInMixin;