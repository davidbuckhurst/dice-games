import React from 'react';
import Number from './Number.js'
import Lock from './Lock.js'
import Score from './Score.js'

class ColourRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checks: Array(12).fill(null),
      score: 0
    };
  }
  
  calculateScore(array) {
    const scoring = [0,1,3,6,10,15,21,28,36,45,55,66,78]

    var count = 0;
    for(var i = 0; i < array.length; ++i){
      if(array[i] === true)
        count++;
    }

    return scoring[count]
  }

  handleClick(i) {
    const checks = this.state.checks.slice();
    checks[i] = !checks[i];
    this.setState({checks: checks});

    var score = this.calculateScore(checks);
    this.setState({score: score});
 
  }

  renderNumber(colour, value, checked) {
    return <Number colour={colour} value={value} 
               checked={checked} onClick={() => {console.log(value); this.handleClick(value-2)}}/>;
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
        {this.renderNumber(this.props.colour,2,this.state.checks[0])}
        {this.renderNumber(this.props.colour,3,this.state.checks[1])}
        {this.renderNumber(this.props.colour,4,this.state.checks[2])}
        {this.renderNumber(this.props.colour,5,this.state.checks[3])}
        {this.renderNumber(this.props.colour,6,this.state.checks[4])}
        {this.renderNumber(this.props.colour,7,this.state.checks[5])}
        {this.renderNumber(this.props.colour,8,this.state.checks[6])}
        {this.renderNumber(this.props.colour,9,this.state.checks[7])}
        {this.renderNumber(this.props.colour,10,this.state.checks[8])}
        {this.renderNumber(this.props.colour,11,this.state.checks[9])}
        {this.renderNumber(this.props.colour,12,this.state.checks[10])}
        {this.renderLock(this.props.colour)}
        {this.renderScore(this.props.colour, this.state.score)}
      </div>
    );
  }
}

export default ColourRow;
