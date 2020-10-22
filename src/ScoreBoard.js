import React from 'react';
import ColourRow from './ColourRow';
import Score from './Score';

class ScoreBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reds: Array(12).fill(null),
      greens: Array(12).fill(null),
      yellows: Array(12).fill(null),
      blues: Array(12).fill(null),
      redScore: Array(1).fill(0),
      greenScore: Array(1).fill(0), 
      blueScore: Array(1).fill(0), 
      yellowScore: Array(1).fill(0)
    };
  }
  
  calculateScore(array) {
    const scoring = [0,1,3,6,10,15,21,28,36,45,55,66,78]
    var count = 0;
    for(var i = 0; i < array.length; ++i){
      if(array[i] === true)
        count++;
    }
    console.log("score " + scoring[count])
    return scoring[count]
  }

  handleClick(i, checks, score) {
    console.log(`Handle Click ${i} ${checks} ${score}`)
    
    //const checks = this.state.checks.slice();
    checks[i] = !checks[i];

    var newScore = this.calculateScore(checks);
    console.log("Scores " + score + " " + newScore)
    score[0] = newScore;

    var newTotal = this.state.yellowScore + this.state.redScore + this.state.blueScore + this.state.yellowScore

    this.setState({total: newTotal });
  }


  renderRow(colour, checks, score) {
    return <ColourRow colour={colour} checks={checks} score={score}
      clickHandler={(value) => {this.handleClick(value, checks, score) } }/>;
  }

  renderScore(colour, score) {
    return <Score colour={colour} score={score} />; 
  }

  render() {

    return (
      <div className="ScoreBoard">
        {this.renderRow("Red", this.state.reds, this.state.redScore )}
        {this.renderRow("Blue", this.state.blues, this.state.blueScore)}
        {this.renderRow("Green", this.state.greens, this.state.greenScore)}
        {this.renderRow("Yellow", this.state.yellows, this.state.yellowScore)}

        {this.renderScore("Red", this.state.redScore)}
        {this.renderScore("Blue", this.state.blueScore)}
        {this.renderScore("Green", this.state.greenScore)}
        {this.renderScore("Yellow", this.state.yellowScore)}
      </div>
    );
  }
}

export default ScoreBoard;
