/** @jsx React.DOM */
var React = require('react');

var SayHello = React.createClass({
  getInitialState: function(){
    return {
      username: 'Stranger'
    }
  },
  handleChange: function(e){
    this.setState({
      username: e.target.value
    });
  },
  render: function(){
    return (
      <div>
        Hello <b>{this.state.username}</b><br />
        Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
      </div>
    )
  }
});

module.exports = SayHello;