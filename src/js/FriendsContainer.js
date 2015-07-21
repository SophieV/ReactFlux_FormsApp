/** @jsx React.DOM */
var React = require('react');
var ShowList = require('./ShowList');
var AddFriend = require('./AddFriend');

var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: 'Tyler McGinnis',
      friends: ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen']
    }
  },
  addFriend: function(friend){
    this.setState({
      friends: this.state.friends.concat([friend])
    });
  },
  removeFriend: function(friend){
    var items = this.state.friends.filter(function(item){
      return item !== friend;
    });

    this.setState({
      friends: items
    });
  },
  render: function(){
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList friendsNames={this.state.friends} removeOld={this.removeFriend} />
      </div>
    )
  }
});

module.exports = FriendsContainer;