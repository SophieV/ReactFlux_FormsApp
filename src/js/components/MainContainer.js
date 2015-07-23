var React = require('react'),
    FriendsContainer = require('../components/FriendsContainer'),
    SayHello = require('../components/SayHello'),
    Navigation = require('../components/Navigation'),
    Button = require('react-bootstrap/lib/Button');

var MainContainer = React.createClass({

  render: function () {
    return (
      <div>
        <Navigation name="navbar"/>
        <br/>
        <br/>
      	<SayHello name="child"/>
        <FriendsContainer name="friends"/>
      </div>
    );
  }

});

module.exports = MainContainer;