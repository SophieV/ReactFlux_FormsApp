var React = require('react'),
    _ = require('underscore'),
    t = require('tcomb-form'),
    Form = t.form.Form,
    Button = require('react-bootstrap/lib/Button');

var AgeRange = t.enums({
  '18-26': '18-26',
  '27-38': '27-38',
  '39-50': '39-50',
  '51-62': '51-62'
});

var Colors = t.struct({
  'Blue': t.Bool,
  'Red': t.Bool,
  'Yellow': t.Bool,
  'Pink': t.Bool
});

var SurveyFieldsData = t.struct({
  age: AgeRange,
  colors: Colors
});

var initOptions = {
  legend: "Survey Fields",
  fields: {
    age: {
      factory: t.form.Radio
    }
  }
};

var SurveyFields = React.createClass({
  getInitialState: function(){
    return {
      values: {
        age: this.props.fieldValuesRef.age, 
        colors: this.props.fieldValuesRef.colors
      },
      options: initOptions
    }
  },
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
  _nextStep: function(e) {
    e.preventDefault();

    var formData = this.refs.form.getValue();

    if (formData)
    {
      // extract the label of the selected colors
      var colorKeys = _.keys(formData.colors);
      var checkedColors = _.filter(colorKeys, function(colorKey){
        var selected = false;
        if (formData.colors[colorKey])
        {
          selected = true;
        }
        return selected;
      });

      // Get values via this.refs
      var data = {
        age     : formData.age,
        colors : checkedColors
      };

      this.setState({values: data});

      this.props.saveValuesRef(data);
      this.props.nextStepRef();
    }
  },
  render: function() {
    return (
      <div>
        <ul className="form-fields">
          <li>
            <Form
              ref="form"
              type={SurveyFieldsData}
              options={this.state.options}
              value={this.state.values}
            />
          </li>
          <li className="form-footer">
            <Button className="btn -default pull-left" onClick={this.props.previousStepRef}>Back</Button>
            <Button className="btn -primary pull-right" onClick={this._nextStep}>Save &amp; Continue</Button>
          </li>
        </ul>
      </div>
    )
  }
})

module.exports = SurveyFields;