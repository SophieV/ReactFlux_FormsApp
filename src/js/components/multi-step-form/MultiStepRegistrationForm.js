var React         = require('react'),
    AccountFields = require('./AccountFields'),
    Confirmation  = require('./Confirmation'),
    Success       = require('./Success'),
    SurveyFields  = require('./SurveyFields'),
    assign        = require('object-assign');

// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
var fieldValues = {
  name     : null,
  email    : null,
  password : null,
  age      : null,
  colors   : []
}

var RegistrationForm = React.createClass({
  getInitialState: function() {
    return {
      step : 1
    }
  },

  saveValues: function(field_value) {
    return function() {
      fieldValues = assign({}, fieldValues, field_value)
    }.bind(this)()
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  submitRegistration: function() {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance

    this.nextStep()
  },

  showStep: function() {
    switch (this.state.step) {
      case 1:
        return <AccountFields ref="accountFields"
                              fieldValuesRef={fieldValues}
                              nextStepRef={this.nextStep}
                              previousStepRef={this.previousStep}
                              saveValuesRef={this.saveValues} />
      case 2:
        return <SurveyFields fieldValuesRef={fieldValues}
                             nextStepRef={this.nextStep}
                             previousStepRef={this.previousStep}
                             saveValuesRef={this.saveValues} />
      case 3:
        return <Confirmation fieldValues={fieldValues}
                             previousStepRef={this.previousStep}
                             submitRegistrationRef={this.submitRegistration} />
      case 4:
        return <Success fieldValues={fieldValues} />
    }
  },

  render: function() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    }

    return (
      <main className="form-box">
        <h3>This is a demo form wizard</h3>
        <span className="progress-step">Step {this.state.step}</span>
        <progress className="progress" style={style}></progress>
        {this.showStep()}
      </main>
    )
  }
})

module.exports = RegistrationForm;