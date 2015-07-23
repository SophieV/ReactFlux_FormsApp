var authenticationService = require('../services/authenticationService'),
	routesConstants = require('../constants/routesConstants');

var RedirectWhenLoggedInMixin = {
  statics: {
    willTransitionTo: function (transition) {
      if ( authenticationService.loggedIn()) {
        transition.redirect(routesConstants.HOME_PRIVATE);
      }
    }
  }
};

module.exports = RedirectWhenLoggedInMixin;