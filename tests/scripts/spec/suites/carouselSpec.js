// import dependencies as needed
var React = require('react/addons');

var TestUtils = React.addons.TestUtils;

var Simulate = TestUtils.Simulate;

var TestSlider = require('../../../../src/js/components/carousel/TestSlider');

var EchoLike = require('../../../../src/js/components/EchoLike');

// run tests
describe("Carousel Slider", function() 
{
  var instance;

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

  describe("should allow to change the status of its EchoLike slide component", function() {
    var childInstance;
    var childType;

    beforeEach(function() {
      // This component does not use any lifecycle methods or broadcast
      // events so it does not require rendering to the DOM to be tested.
      childType = React.renderToStaticMarkup(<EchoLike />);

      // childInstance = TestUtils.findRenderedDOMComponentWithTag(instance.props.children, 'EchoLike');
    });

    it("should render", function(){
      var parentMarkup = React.renderToStaticMarkup(<TestSlider />);
      expect(parentMarkup).toContain(childType);

      // expect(childInstance).toBeDefined();
    });

    // it("should be initialized as unliked state", function(){
    //   expect(childInstance.state.liked).toBeDefined();
    //   expect(childInstance.state.liked).toBe(false);
    // });

    // it("should be initialized showing a single button, enabled to be clicked", function(){
    //   var button = TestUtils.findRenderedDOMComponentWithTag(childInstance, 'button');
    //   var buttonNode = React.findDOMNode(button);
    //   expect(buttonNode).toBeDefined();
    //   expect(buttonNode.disabled).toBe(false);
    // });

    // it("should get the liked state after clicking on the button", function(){
    //   var buttonNode = React.findDOMNode(childInstance.refs.likeButton);
    //   TestUtils.Simulate.click(buttonNode);
    //   expect(instance.state.liked).toBeDefined();
    //   expect(instance.state.liked).toBe(true);
    // });

  });
});