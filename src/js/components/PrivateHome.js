var React = require('react'),
	  RedirectToLogIn = require('../mixins/redirect_to_log_in'),
	  authenticationService = require('../services/authenticationService');

var PrivateHome = React.createClass({

  mixins: [RedirectToLogIn],

  render: function () {
    return (
      <div>
        <p>Welcome home !</p>
      </div>
    );
  }
});

module.exports = PrivateHome;