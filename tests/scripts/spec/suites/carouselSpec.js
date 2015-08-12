// import dependencies as needed
var React = require('react/addons');

var TestUtils = React.addons.TestUtils;

// var Simulate = TestUtils.Simulate;

var TestSlider = require('../../../../src/js/components/carousel/TestSlider');

// run tests
describe("Carousel Slider", function() 
{
  var instance;

  // afterEach(function() {
  //   if (instance && instance.isMounted()) {
  //     // Only components with a parent will be unmounted
  //     React.unmountComponentAtNode(instance.getDOMNode().parent);
  //   }
  // });

  beforeEach(function() {
    // This component does not use any lifecycle methods or broadcast
    // events so it does not require rendering to the DOM to be tested.
    instance = TestUtils.renderIntoDocument(<TestSlider />);
  });

  it("should render", function(){
    expect(instance).toBeDefined();
  });

  it("should contain 6 slides to display", function(){
    expect(instance.state.slides).toBeDefined();
    expect(instance.state.slides.length).toBe(6);
  });

  // it("should allow to change the status of its Like component");
});