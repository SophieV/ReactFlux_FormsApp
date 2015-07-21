/** @jsx React.DOM */
var React = require('react');
var FriendsContainer = require('../components/FriendsContainer');
var SayHello = require('../components/SayHello');

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