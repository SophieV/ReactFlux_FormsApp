var React = require('react'),
    FriendsList = require('./FriendsList'),
    AddItem = require('./AddItem'),
    friendshipStore = require('../../stores/friendshipStore'),
    friendshipActions = require('../../actions/friendshipActions'),
    appStore = require('../../stores/appStore'),
    appActions = require('../../actions/appActions');

var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      something: appStore.getSomething(),
      friends: friendshipStore.getList()
    }
  },
  componentDidMount: function(){
    friendshipStore.addChangeListener(this._onFriendsChange);
    appStore.addChangeListener(this._onAppChange);
  },
  componentWillUnmount: function(){
    friendshipStore.removeChangeListener(this._onFriendsChange);
    appStore.removeChangeListener(this._onAppChange);
  },
  _handleAddFriend: function(newItem){
    friendshipActions.addFriend(newItem);
  },
  _handleRemoveFriend: function(item){
    friendshipActions.removeFriend(item);
  },
  _onFriendsChange: function(){
    this.setState({
      friends: friendshipStore.getList()
    });
  },
  _onAppChange: function(){
    this.setState({
      something: appStore.getSomething()
    });
  },
  render: function(){
    return (
      <div className="form-box">
        <h3>Here you can see what you've entered in the Sidebar</h3>
        <p> {this.state.something?('Echoing - ' + this.state.something + ' -'):''} </p>
        <h3>Here you can manage a list of Items</h3>
        <AddItem addItemRef={this._handleAddFriend} addItemCustomTitleRef="Add Friend"/>
        <FriendsList friendsNamesRef={this.state.friends} removeFriendRef={this._handleRemoveFriend} />
      </div>
    )
  }
});

module.exports = FriendsContainer;