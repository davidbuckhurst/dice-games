import React from 'react';
import ColourRow from './ColourRow';

class ScoreBoard extends React.Component {

  renderRow(colour) {
    return <ColourRow colour={colour} />;
  }
  render() {

    return (
      <div className="ScoreBoard">
        {this.renderRow("Red")}
        {this.renderRow("Blue")}
        {this.renderRow("Green")}
        {this.renderRow("Yellow")}
      </div>
    );
  }
}

export default ScoreBoard;
