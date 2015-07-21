/** @jsx React.DOM */
var React = require('react');

var friendshipStore = require('../stores/friendshipStore');
var friendshipActions = require('../actions/friendshipActions');

var SayHello = React.createClass({
  getInitialState: function(){
    return {
      username: friendshipStore.getUsername() //'Stranger'
    }
  },
  componentDidMount: function(){
    friendshipStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    friendshipStore.removeChangeListener(this._onChange);
  },
  handleUpdateUsername: function(event){
    friendshipActions.updateUsername(event.target.value);
  },
  _onChange: function(){
    this.setState({
      username: friendshipStore.getUsername()
    })
  },
  // handleChange: function(e){
  //   this.setState({
  //     username: e.target.value
  //   });
  // },
  render: function(){
    return (
      <div>
        Hello <b>{this.state.username}</b><br />
        Change Name: <input type="text" value={this.state.username} onChange={this.handleUpdateUsername} />
      </div>
    )
  }
});

module.exports = SayHello;