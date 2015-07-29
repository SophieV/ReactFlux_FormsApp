var React = require('react'),
    Link = require('react-router').Link,
    State = require('react-router').State;

var HighlightedLink = React.createClass({

  mixins: [ State ],

  render: function () {
    var isActive = this.isActive(this.props.to, this.props.params, this.props.query);
    var className = isActive ? 'active' : '';
    var link = (
      <Link {...this.props} />
    );
    return <div className={className}>{link}</div>;
  }

});

module.exports = HighlightedLink;