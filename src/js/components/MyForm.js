var React = require('react'),
    t = require('tcomb-form'),
    DatePicker = require('react-date-picker'),
    Form = t.form.Form,
    Button = require('react-bootstrap/lib/Button');

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

var ParentWithChildren = t.struct({
  person: Person,
  children: t.list(Person)
});

var options = {
  fields: {
    person: {
      fields: {
        gender: {
          factory: t.form.Radio
        }
      }
    },
    children: {
      item: {
        fields: {
          gender: {
              factory: t.form.Radio
          }
        }
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
      <div className="form-box">
        <Form
          ref="form"
          type={ParentWithChildren} options={options}
        />
        <Button onClick={this.save}>Save</Button>
        <DatePicker
            className="form-box"
            minDate='2014-04-04'
            maxDate='2015-10-10'
            date={date}
            onChange={this.onDateChange}
        />
      </div>
    );
  }
});

module.exports = MyForm;