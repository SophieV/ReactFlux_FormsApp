/** @jsx React.DOM */
var React = require('react');
var ShowList = require('../components/ShowList');
var AddFriend = require('../components/AddFriend');

var friendshipStore = require('../stores/friendshipStore');
var friendshipActions = require('../actions/friendshipActions');

var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: 'Tyler McGinnis',
      friends: friendshipStore.getList() // ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen']
    }
  },
  componentDidMount: function(){
    friendshipStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    friendshipStore.removeChangeListener(this._onChange);
  },
  handleAddFriend: function(newItem){
    friendshipActions.addFriend(newItem);
  },
  handleRemoveFriend: function(index){
    friendshipActions.removeFriend(index);
  },
  _onChange: function(){
    this.setState({
      friends: friendshipStore.getList()
    })
  },
  // addFriend: function(friend){
  //   this.setState({
  //     friends: this.state.friends.concat([friend])
  //   });
  // },
  // removeFriend: function(friend){
  //   var items = this.state.friends.filter(function(item){
  //     return item !== friend;
  //   });

  //   this.setState({
  //     friends: items
  //   });
  // },
  render: function(){
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriend addNew={this.handleAddFriend} />
        <ShowList friendsNames={this.state.friends} removeOld={this.handleRemoveFriend} />
      </div>
    )
  }
});

module.exports = FriendsContainer;