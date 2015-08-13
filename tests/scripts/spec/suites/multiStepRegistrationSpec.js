// import dependencies as needed
var React;

var _ = require('underscore');

var TestUtils;

var Simulate;

var MultiStepRegistrationForm = require('../../../../src/js/components/multi-step-form/MultiStepRegistrationForm');

var AccountFields = require('../../../../src/js/components/multi-step-form/AccountFields');

// run tests
describe("Registration Wizard", function() 
{
  var instance;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Simulate = TestUtils.Simulate;

    // This component does not use any lifecycle methods or broadcast
    // events so it does not require rendering to the DOM to be tested.
    instance = TestUtils.renderIntoDocument(<MultiStepRegistrationForm />);
  });

  it("should render", function(){
    expect(instance).toBeDefined();
  });

  it("should start in step 1", function(){
    expect(instance.state.step).toBeDefined();
    expect(instance.state.step).toBe(1);
  });

  it("should contain component AccountFields in step 1", function(){
    // the shallow rendering should only go one level deep - experimental still
    // cannot set state on shallow rendering
    var renderer = TestUtils.createRenderer();
    renderer.render(<MultiStepRegistrationForm/>);
    var shallowResult = renderer.getRenderOutput();

    var refs = _.pluck(shallowResult.props.children, 'ref');
    expect(refs).toContain('accountFields');
  });

  it("should remain in step 1 if at least one input field is empty", function(){
    var renderedDom = React.findDOMNode(instance);

    var allInputs = renderedDom.querySelectorAll('input');
    expect(allInputs.length).toBe(3);

    TestUtils.Simulate.click(renderedDom.querySelectorAll('button')[0]);

    expect(instance.state.step).toBe(1);
  });

  it("should remain in step 1 if all the fields are filled in but the values entered does not comply with form expectations", function(){
    var renderedDom = React.findDOMNode(instance);

    var allInputs = renderedDom.querySelectorAll('input');
    expect(allInputs.length).toBe(3);

    var valueAssigned = 'sobo.co';
    _.each(allInputs, function(inputField){
      TestUtils.Simulate.change(inputField, {target: {value: valueAssigned}});
      expect(inputField.value).toBe(valueAssigned);
    });
    TestUtils.Simulate.click(renderedDom.querySelectorAll('button')[0]);

    expect(instance.state.step).toBe(1);
  });

  it("should move to step 2 if all the input fields have data entered to comply with rules", function(){
    var renderedDom = React.findDOMNode(instance);

    var allInputs = renderedDom.querySelectorAll('input');
    expect(allInputs.length).toBe(3);

    var valueAssigned = 'so@bo.co';
    _.each(allInputs, function(inputField){
      TestUtils.Simulate.change(inputField, {target: {value: valueAssigned}});
      expect(inputField.value).toBe(valueAssigned);
    });
    TestUtils.Simulate.click(renderedDom.querySelectorAll('button')[0]);

    expect(instance.state.step).toBe(2);
  });

});