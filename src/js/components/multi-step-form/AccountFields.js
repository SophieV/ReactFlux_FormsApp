var React = require('react'),
    t = require('tcomb-form'),
    Form = t.form.Form;

var AccountInfo = t.struct({
  name: t.Str,
  password: t.Str,
  email: t.Str
});

var initOptions = {
  legend: "Account Details",
  auto: 'placeholders',
  fields: {
    email: {
      placeholder: 'Enter your email'
    },
    password: {
      password: true
    }
  }
};

//value={this.state.values}
//onChange={this._onChange}
var AccountFields = React.createClass({
  getInitialState: function(){
    return {
      values: {
        name: this.props.fieldValuesRef.name, 
        password: this.props.fieldValuesRef.password, 
        email: this.props.fieldValuesRef.email
      },
      options: initOptions
    }
  },
  nextStepRef: function(e) {
    e.preventDefault();

    var formData = this.refs.form.getValue();

    if (formData)
    {
      // Get values via this.refs
      var data = {
        name     : formData.name,
        password : formData.password,
        email    : formData.email,
      };

      // how to trigger error on field with some comment
      //this.setState({options: {fields: {email: {hasError: true, error: 'blah test'}}}});

      this.setState({values: data});

      this.props.saveValuesRef(data);
      this.props.nextStepRef();
    }
  },
  render: function() {
    return (
      <div>
        <Form
          ref="form"
          type={AccountInfo}
          options={this.state.options}
          value={this.state.values}
        />
        <button className="btn -primary pull-right" onClick={this.nextStepRef}>Save &amp; Continue</button>
      </div>
    )
  }
});

module.exports = AccountFields;