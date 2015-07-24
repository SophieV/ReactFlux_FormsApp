var React    = require('react');
var t = require('tcomb-form');
var DatePicker = require('react-date-picker');
var Form = t.form.Form;

var date = Date.now();

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

  onDateChange: function(dateString, moment){
    console.log('new date is '+ moment.format('DD/MM/YYYY'));
  },

  render: function() {
    return (
      <div>
      <div className="form-box">
        <Form
          ref="form"
          type={Children} options={options}
        />
        <button onClick={this.save}>Save</button>
        <DatePicker
            className="form-box"
            minDate='2014-04-04'
            maxDate='2015-10-10'
            date={date}
            onChange={this.onDateChange}
        />
      </div>
      </div>
    );
  }
});

module.exports = MyForm;