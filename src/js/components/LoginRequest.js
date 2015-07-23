var React = require('react'),
    Login = require('../components/Login');

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