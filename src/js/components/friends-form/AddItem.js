var React = require('react'),
    t = require('tcomb-form'),
    Form = t.form.Form;

var Item = t.struct({
  name: t.Str
});

var options = {};

var AddItem = React.createClass({
  save: function() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    // if validation fails, value will be null
    if (value) {
      // value here is an instance of Friend
      console.log(value);
      this.props.addItemRef(value);
    }
  },
  render: function(){
    return (
        <div>
          <h3>{this.props.addItemCustomTitleRef}</h3>
          <Form
            ref="form"
            type={Item} options={options}
          />
          <button onClick={this.save}>Add</button>
        </div>
    );
  }
});

module.exports = AddItem;