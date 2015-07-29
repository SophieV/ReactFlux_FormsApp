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
    return <span className={className}>{link}</span>;
  }

});

module.exports = HighlightedLink;