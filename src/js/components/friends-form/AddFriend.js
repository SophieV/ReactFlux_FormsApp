var React = require('react');
var t = require('tcomb-form');
var Form = t.form.Form;

var Friend = t.struct({
  fullName: t.Str
});

var options = {};

var AddFriend = React.createClass({
  save: function() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    // if validation fails, value will be null
    if (value) {
      // value here is an instance of Friend
      console.log(value);
      this.props.addFriendRef(value);
    }
  },
  render: function(){
    return (
        <div>
          <h3>Add Friend</h3>
          <Form
            ref="form"
            type={Friend} options={options}
          />
          <button onClick={this.save}>Add Friend</button>
        </div>
    );
  }
});

module.exports = AddFriend;