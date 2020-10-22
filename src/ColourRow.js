import React from 'react';
import Number from './Number.js'
import Lock from './Lock.js'
import Score from './Score.js'

class ColourRow extends React.Component {

  renderNumber(colour, value, checked) {
    return <Number colour={colour} 
               value={value} 
               checked={checked} 
               onClick={() => {this.props.clickHandler(value-2)}}/>;
  }
  renderLock(colour) {
    return <Lock colour={colour} />;
  }
  renderScore(colour, score) {
    return <Score colour={colour} score={score} />;
  }

  render() {

    return (
      <div className={["ColourRow", this.props.colour].join(' ')}>
        {this.renderNumber(this.props.colour,2,this.props.checks[0])}
        {this.renderNumber(this.props.colour,3,this.props.checks[1])}
        {this.renderNumber(this.props.colour,4,this.props.checks[2])}
        {this.renderNumber(this.props.colour,5,this.props.checks[3])}
        {this.renderNumber(this.props.colour,6,this.props.checks[4])}
        {this.renderNumber(this.props.colour,7,this.props.checks[5])}
        {this.renderNumber(this.props.colour,8,this.props.checks[6])}
        {this.renderNumber(this.props.colour,9,this.props.checks[7])}
        {this.renderNumber(this.props.colour,10,this.props.checks[8])}
        {this.renderNumber(this.props.colour,11,this.props.checks[9])}
        {this.renderNumber(this.props.colour,12,this.props.checks[10])}
        {this.renderLock(this.props.colour)}
        {this.renderScore(this.props.colour, this.props.score)}
      </div>
    );
  }
}

export default ColourRow;
