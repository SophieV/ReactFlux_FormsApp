var React = require('react'),
    appStore = require('../stores/appStore'),
    appActions = require('../actions/appActions'),
    Button = require('react-bootstrap/lib/Button');

var EchoLike = React.createClass({
  getInitialState: function(){
    return {
      something: appStore.getSomething(),
      liked: false
    }
  },
  componentDidMount: function(){
    appStore.addChangeListener(this._onAppChange);
  },
  componentWillUnmount: function(){
    appStore.removeChangeListener(this._onAppChange);
  },
  _onAppChange: function(){
    this.setState({
      something: appStore.getSomething()
    });
  },
  _like: function(){
    this.setState({
      liked: true
    });
  },
  render: function(){
    return (
      <div className="form-box">
        <h3>Here you can see what you've entered in the Sidebar</h3>
        <p> {this.state.something?('Echoing - ' + this.state.something + ' -'):''} </p>
        <p>{this.state.liked?'Liked':null}</p><Button onClick={this._like} ref="likeButton" className={this.state.liked?'hidden':null}>Like</Button>
      </div>
    )
  }
});

module.exports = EchoLike;