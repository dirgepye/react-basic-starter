import React from 'react';
import {Link,History} from 'react-router';

var App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

export default App;
