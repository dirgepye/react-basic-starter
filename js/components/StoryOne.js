import React from 'react';
import {Link,History} from 'react-router';

var StoryOne = React.createClass({
  getInitialState : function() {
    return {
      verb1: "cook",
      adjective1: "bloated",
      noun1: "chair",
    };
  },

  render() {
    return (
      <div>
        <p>My name is Shawn and I like to <span className="blank">{this.state.verb1}</span> so that I can
        stay <span className="blank">{this.state.adjective1}</span>. My friends
        would say that I'm a real <span className="blank">{this.state.noun1}</span> when it comes
        to staying in shape!</p>
      
      <form>
        <input type="text" value="rofl" />
        <input type="text" value="lmao" />
      </form>
      </div>
    );
  }
});

export default StoryOne;