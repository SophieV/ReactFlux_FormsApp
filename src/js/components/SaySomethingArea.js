var React = require('react'),
    appStore = require('../stores/appStore'),
    appActions = require('../actions/appActions');

var SaySomething = React.createClass({
  getInitialState: function(){
    return {
      something: appStore.getSomething()
    }
  },
  componentDidMount: function(){
    appStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    appStore.removeChangeListener(this._onChange);
  },
  handleUpdateSomething: function(event){
    appActions.updateSomething(event.target.value);
  },
  _onChange: function(){
    this.setState({
      something: appStore.getSomething()
    })
  },
  render: function(){
    return (
      <div className="form-box">
       <p> {(this.state.something?('I said -' + this.state.something + ' -'):'')}</p>
        <br />
        Type something... <input type="text" value={this.state.something} onChange={this.handleUpdateSomething} />
      </div>
    )
  }
});

module.exports = SaySomething;