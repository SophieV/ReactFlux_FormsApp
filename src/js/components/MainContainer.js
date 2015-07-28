var React = require('react'),
    SaySomethingArea = require('../components/SaySomethingArea'),
    MyForm = require('../components/MyForm'),
    TestSlider = require('../components/carousel/TestSlider'),
    MultiStepRegistrationForm = require('../components/multi-step-form/MultiStepRegistrationForm'),
    Navigation = require('../components/Navigation'),
    Button = require('react-bootstrap/lib/Button');

var MainContainer = React.createClass({

  render: function () {
    return (
      <div>
        <TestSlider name="myslider"/>
        <div id="main-container">
          <Navigation name="navbar"/>
          <br/>
          <br/>
        	<SaySomethingArea name="child"/>
          <MultiStepRegistrationForm/>
        </div>
    </div>
    );
  }

});

module.exports = MainContainer;