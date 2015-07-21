/** @jsx React.DOM */
var React = require('react');
var SayHello = require('./SayHello');
var FriendsContainer = require('./FriendsContainer');

var Parent = React.createClass({
  render: function(){
    return (
      <div class="parent-box">
        <SayHello name="child"/>
        <FriendsContainer name="friends"/>
      </div>
    )
  }
});

module.exports = Parent;