var React = require('react');

var SurveyFields = React.createClass({

  renderOptions: function(type, name, value, index) {
    var isChecked = function() {
      if (type == 'radio') return value == this.props.fieldValues[name]

      if (type == 'checkbox') return this.props.fieldValues[name].indexOf(value) >= 0

      return false
    }.bind(this)

    return (
      <label key={index}>
        <input type={type} name={name} value={value} defaultChecked={isChecked()} /> {value}
      </label>
    )
  },

  render: function() {
    return (
      <div>
        <h2>Survey Question</h2>
        <ul className="form-fields">
          <li className="radio">
            <span className="label">Age</span>
            {['18-26', '27-38', '39-50', '51-62'].map(this.renderOptions.bind(this, 'radio', 'age'))}
          </li>
          <li className="checkbox">
            <span className="label">Favorite Colors</span>
            {['Blue', 'Red', 'Orange', 'Green'].map(this.renderOptions.bind(this, 'checkbox', 'colors'))}
          </li>
          <li className="form-footer">
            <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
          </li>
        </ul>
      </div>
    )
  },

  nextStep: function() {
    // Get values via querySelector
    var age    = document.querySelector('input[name="age"]:checked')
    var colors = document.querySelectorAll('input[name="colors"]')

    var data = {
      age    : this.getValuesFromRadioOrCheckboxGroup(age),
      colors : this.getValuesFromRadioOrCheckboxGroup(colors)
    }

    this.props.saveValues(data)
    this.props.nextStep()
  },

  getValuesFromRadioOrCheckboxGroup: function(element){
      var values = []

      if (!element) return null

      if (typeof element.length == 'undefined') return element.checked ? element.value : null

      for (var i = 0; i < element.length; i++) {
        element[i].checked && values.push(element[i].value)
      }

      return values;
  }
})

module.exports = SurveyFields