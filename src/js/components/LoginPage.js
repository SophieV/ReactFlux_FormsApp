var React = require('react'),
    Login = require('./LoginComponent');

var LoginRequest = React.createClass({

  render: function () {
    return (
      <div>
      	<h3>Here you are denied access</h3>
        <p>You are trying to access a restricted area, please :</p>
        <Login/>
      </div>
    );
  }
});

module.exports = LoginRequest;