var React = require('react'),
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
        <MultiStepRegistrationForm/>
      </div>
    );
  }

});

module.exports = MainContainer;