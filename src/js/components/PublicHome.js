var React = require('react'),
    RedirectWhenLoggedInMixin = require('../mixins/redirect_when_logged_in');

var PublicHome = React.createClass({

  mixins: [RedirectWhenLoggedInMixin],

  render: function () {
    return (
	  <div className="form-box">
        Hello Stranger - you are seeing this because you are not logged in
      </div>
    );
  }

});

module.exports = PublicHome;