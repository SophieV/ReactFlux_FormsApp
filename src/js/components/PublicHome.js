var React = require('react'),
    RedirectWhenLoggedIn = require('../mixins/redirect_when_logged_in');

var PublicHome = React.createClass({

  mixins: [RedirectWhenLoggedIn],

  render: function () {
    return (
	  <div>
        Hello Stranger - you see it because you are not logged in
      </div>
    );
  }

});

module.exports = PublicHome;