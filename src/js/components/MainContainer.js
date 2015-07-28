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
        <div className="row">
          <div className="col-12 col-sm-8 col-lg-8 main">
            <div>
              <Navigation name="navbar"/>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-lg-4 right">
            <SaySomethingArea name="child"/>
            <MultiStepRegistrationForm/>
          </div>
        </div>
    </div>
    );
  }

});

module.exports = MainContainer;