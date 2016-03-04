import React from 'react';
import {Link} from 'react-router';

var Home = React.createClass({
  render() {
    return (
      <div>
        <h1> Start by choosing one of the stories below! </h1>
        <ul>
          <li><Link to="/repos">Repos</Link></li>
          <li><Link to="/followers">Followers</Link></li>
          <li><Link to="/storyone">Story One</Link></li>
        </ul>
      </div>
    )
  }
});

export default Home;
