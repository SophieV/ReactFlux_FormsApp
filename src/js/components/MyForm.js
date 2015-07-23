var React    = require('react');
var t = require('tcomb-form');
var DateTimeField = require('react-bootstrap-datetimepicker');
var Form = t.form.Form;

var Gender = t.enums({
  M: 'Male',
  F: 'Female'
});

var Country = t.enums({
  US: 'United States',
  IT: 'Italy'
});

var Person = t.struct({
  fullName: t.Str,
  nickname: t.maybe(t.Str),
  gender: Gender,
  country: Country,
  tags: t.list(t.Str),
  birthDate: t.Dat,
  subscribeNewsletter: t.Bool
});

var Children = t.struct({
  person: Person,
  children: t.list(Person)
});

// only works with simple form, not list - no "children"
var options = {
  fields: {
    children: {
        gender: {
          factory: t.form.Radio
        }
    }
  }
};

var MyForm = React.createClass({
  save: function() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    // if validation fails, value will be null
    if (value) {
      // value here is an instance of Person
      console.log(value);
    }
  },

  render: function() {
    return (
      <div>
        <Form
          ref="form"
          type={Children} options={options}
        />
        <button onClick={this.save}>Save</button>
        <DateTimeField mode="date"/>
      </div>
    );
  }
});

module.exports = MyForm;