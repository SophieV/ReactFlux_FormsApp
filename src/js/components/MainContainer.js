var React = require('react'),
    FriendsContainer = require('../components/FriendsContainer'),
    SayHello = require('../components/SayHello'),
    MyForm = require('../components/MyForm'),
    MultiStep = require('../components/Registration'),
    Navigation = require('../components/Navigation'),
    Button = require('react-bootstrap/lib/Button');

var MainContainer = React.createClass({

  render: function () {
    return (
      <div id="main-container">
        <Navigation name="navbar"/>
        <br/>
        <br/>
      	<SayHello name="child"/>
        <FriendsContainer name="friends"/>
        <MultiStep/>
      </div>
    );
  }

});

module.exports = MainContainer;