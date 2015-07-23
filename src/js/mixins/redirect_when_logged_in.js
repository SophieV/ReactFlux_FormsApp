var authenticationService = require('../services/authenticationService'),
	routesConstants = require('../constants/routesConstants');

var RedirectWhenLoggedIn = {
  statics: {
    willTransitionTo: function (transition) {
      if ( authenticationService.loggedIn()) {
        transition.redirect(routesConstants.HOME_PRIVATE);
      }
    }
  }
};

module.exports = RedirectWhenLoggedIn;