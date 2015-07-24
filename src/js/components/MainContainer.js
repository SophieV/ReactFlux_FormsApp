var React = require('react'),
    FriendsArea = require('../components/friends-form/FriendsArea'),
    SaySomethingArea = require('../components/SaySomethingArea'),
    MyForm = require('../components/MyForm'),
    MultiStepRegistrationForm = require('../components/multi-step-form/MultiStepRegistrationForm'),
    Navigation = require('../components/Navigation'),
    Button = require('react-bootstrap/lib/Button');

var MainContainer = React.createClass({

  render: function () {
    return (
      <div id="main-container">
        <Navigation name="navbar"/>
        <br/>
        <br/>
      	<SaySomethingArea name="child"/>
        <FriendsArea name="friends"/>
        <MultiStepRegistrationForm/>
      </div>
    );
  }

});

module.exports = MainContainer;