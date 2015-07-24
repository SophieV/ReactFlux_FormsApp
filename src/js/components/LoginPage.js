var React = require('react'),
    Login = require('./LoginComponent');

var LoginRequest = React.createClass({

  render: function () {
    return (
      <div>
        <p>You are trying to access a restricted area, please :</p>
        <Login/>
      </div>
    );
  }
});

module.exports = LoginRequest;