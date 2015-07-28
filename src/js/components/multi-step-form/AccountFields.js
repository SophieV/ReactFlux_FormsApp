var React = require('react'),
    t = require('tcomb-form'),
    Form = t.form.Form,
    Button = require('react-bootstrap/lib/Button');

var IdentifiedEmail = t.subtype(t.Str, function (s) {
  return s.indexOf('@') !== -1
});

var AccountInfo = t.struct({
  name: t.Str,
  password: t.Str,
  email: IdentifiedEmail
});

var initOptions = {
  legend: "Account Details",
  auto: 'placeholders',
  fields: {
    email: {
      placeholder: 'Enter your email',
      error: "Invalid Email Format"
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
  _nextStep: function(e) {
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
        <ul className="form-fields">
          <li>
            <Form
              ref="form"
              type={AccountInfo}
              options={this.state.options}
              value={this.state.values}
            />
          </li>
          <li className="form-footer">
          <Button className="btn -primary pull-right" onClick={this._nextStep}>Save &amp; Continue</Button>
          </li>
        </ul>
      </div>
    )
  }
});

module.exports = AccountFields;