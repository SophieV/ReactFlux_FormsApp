/** @jsx React.DOM */
var React = require('react');

var ShowList = React.createClass({
  getDefaultProps: function(){
    return {
      friendsNames: []
    }
  },
  handleRemoveOld: function(friend){
    return function(e) {
      e.preventDefault();
      this.props.removeOld(friend);
    }.bind(this);
    event.preventDefault();
  },
  render: function(){
    var listItems = this.props.friendsNames.map(function(friend){
      return (
        <li> {friend} <button onClick={this.handleRemoveOld(friend)}> Remove </button></li>
      )
    }.bind(this));

    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

module.exports = ShowList;