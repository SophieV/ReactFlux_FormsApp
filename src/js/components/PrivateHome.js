var React = require('react'),
    FriendsArea = require('../components/friends-form/FriendsArea'),
	  RedirectToLogInMixin = require('../mixins/redirect_to_log_in'),
	  authenticationService = require('../services/authenticationService');

var PrivateHome = React.createClass({

  mixins: [RedirectToLogInMixin],

  render: function () {
    return (
      <div className="form-box">
        <p>Welcome home !</p>
        <FriendsArea name="friends"/>
      </div>
    );
  }
});

module.exports = PrivateHome;