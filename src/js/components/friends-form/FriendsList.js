/** @jsx React.DOM */
var React = require('react');

var FriendsList = React.createClass({
  getDefaultProps: function(){
    return {
      friendsNames: []
    }
  },
  handleRemoveOld: function(friend){
    return function(e) {
      e.preventDefault();
      this.props.removeFriendRef(friend);
    }.bind(this);
    event.preventDefault();
  },
  render: function(){
    var listItems = this.props.friendsNamesRef.map(function(friend){
      return (
        <li> {friend} <button onClick={this.handleRemoveOld(friend)}> Remove </button></li>
      )
    }.bind(this));

    return (
      <div>
        <h3>My Friends are</h3>
        <ul>
          {(listItems.length > 0?listItems:'Sadly, I have no friends.')}
        </ul>
      </div>
    )
  }
});

module.exports = FriendsList;