var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    SaySomethingArea = require('../components/SaySomethingArea'),
    MyForm = require('../components/MyForm'),
    TestSlider = require('../components/carousel/TestSlider'),
    MultiStepRegistrationForm = require('../components/multi-step-form/MultiStepRegistrationForm'),
    Navigation = require('../components/Navigation'),
    Button = require('react-bootstrap/lib/Button');

var MainContainer = React.createClass({

  // <RouteHandler/> specifies the destination in the DOM where "pages" content is rendered
  render: function () {
    return (
      <div>
        <TestSlider name="myslider"/>
        <Navigation name="navbar"/>
        <div className="row">
          <div className="col-12 col-sm-8 col-lg-8 main">
            <RouteHandler/>
          </div>
          <div className="col-12 col-sm-4 col-lg-4 sidebar">
            <SaySomethingArea name="child"/>
            <MultiStepRegistrationForm/>
          </div>
        </div>
    </div>
    );
  }

});

module.exports = MainContainer;