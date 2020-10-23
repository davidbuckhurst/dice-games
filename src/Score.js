import React from 'react';

class Score extends React.Component {
  render() {

    return (
      <div className={["Score", this.props.colour ].join(' ')}>
        <span>{this.props.score}</span>
      </div>
    );
  }
}

export default Score;
