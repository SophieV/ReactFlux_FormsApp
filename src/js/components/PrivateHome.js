var React = require('react'),
	  RedirectToLogInMixin = require('../mixins/redirect_to_log_in'),
	  authenticationService = require('../services/authenticationService');

var PrivateHome = React.createClass({

  mixins: [RedirectToLogInMixin],

  render: function () {
    return (
      <div>
        <p>Welcome home !</p>
      </div>
    );
  }
});

module.exports = PrivateHome;