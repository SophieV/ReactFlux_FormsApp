// import dependencies as needed
var React;

var TestUtils;

var Simulate;

var EchoLike = require('../../../../src/js/components/EchoLike');

// run tests
describe("Echo Like", function() 
{
  var instance;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Simulate = TestUtils.Simulate;
    
    // This component does not use any lifecycle methods or broadcast
    // events so it does not require rendering to the DOM to be tested.
    instance = TestUtils.renderIntoDocument(<EchoLike />);
  });

  it("should render", function(){
    expect(instance).toBeDefined();
  });

  it("should be initialized as unliked state", function(){
    expect(instance.state.liked).toBeDefined();
    expect(instance.state.liked).toBe(false);
  });

  it("should be initialized showing a single button, enabled to be clicked", function(){
    var button = TestUtils.findRenderedDOMComponentWithTag(instance, 'button');
    var buttonNode = React.findDOMNode(button);
    expect(buttonNode).toBeDefined();
    expect(buttonNode.disabled).toBe(false);
  });

  it("should get the liked state after clicking on the button", function(){
    var buttonNode = React.findDOMNode(instance.refs.likeButton);
    TestUtils.Simulate.click(buttonNode);
    expect(instance.state.liked).toBeDefined();
    expect(instance.state.liked).toBe(true);
  });

  it("should not show a button to click if the state is liked", function(){
    var buttonNode = React.findDOMNode(instance.refs.likeButton);
    TestUtils.Simulate.click(buttonNode);
    expect(instance.state.liked).toBeDefined();
    expect(instance.state.liked).toBe(true);
    var buttonNodeAfterClick = React.findDOMNode(instance.refs.likeButton);
    expect(buttonNodeAfterClick).toBeDefined();
    expect(buttonNodeAfterClick.className).toContain("hidden");
  });
});