import React from 'react';
import ColourRow from './ColourRow';
import Score from './Score';
import ScoringRules from './ScoringRules';

class ScoreBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      penalties: Array(4).fill(null),
      reds: Array(11).fill(null),
      greens: Array(12).fill(null),
      yellows: Array(12).fill(null),
      purples: Array(12).fill(null),
      blues: Array(12).fill(null),
      redScore: Array(1).fill(0),
      greenScore: Array(1).fill(0), 
      blueScore: Array(1).fill(0), 
      yellowScore: Array(1).fill(0),
      purpleScore: Array(1).fill(0),
      penaltyScore: Array(1).fill(0),
      totalScore: 0
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


  // null == Unchecked
  // false == Disabled
  // true == Checked 
  handleClick(i, checks, score) {
    var n;

    if (checks[i] == null) {
      checks[i] = true;
    }

    else if (checks[i] == true) {
      checks[i] = null;
    }

    // Calculate the max selected number
    var maxSelected = 0;
    var selectCount = 0
    for (n = 0; n < 11; n++) { 
      if (checks[n] == true ) {
        maxSelected = n;
        selectCount++; 
      }
    }

    // Set the lock
    if (maxSelected == 10 && selectCount >= 6) {
      checks[11] = true;
      maxSelected = 11
    }
    
    // Unset the lock
    if (checks[10] == null || selectCount <6 ) {
      checks[11] = null;
    }

    // Disable any values less than the max selected
    for (n = 0; n < maxSelected; n++) { 
      if (checks[n] == null ) {
        checks[n] = false 
      }
    }

    // Ensure any values over the max selected are clickable
    for (n = maxSelected; n <= 12; n++) { 
      if (checks[n] == false ) {
        checks[n] = null 
      }
    }



    var newScore = this.calculateScore(checks);
    console.log("Scores " + score + " " + newScore)
    score[0] = newScore;

    var newTotal = this.state.yellowScore[0] + 
                   this.state.redScore[0] + 
                   this.state.blueScore[0] + 
                   this.state.purpleScore[0] + 
                   this.state.greenScore[0] - 
                   this.state.penaltyScore[0]
    this.setState({totalScore: newTotal });
  }



  handlePenaltyClick(i, array, score) {
    array[i] = !array[i];

    var count = 0;
    for(var i = 0; i < array.length; ++i){
      if(array[i] === true)
        count++;
    }

    var newScore = count * 5;
    console.log("Scores " + score + " " + newScore)
    score[0] = newScore;

    var newTotal = this.state.yellowScore[0] + this.state.redScore[0] + this.state.blueScore[0] + this.state.greenScore[0] + this.state.purpleScore[0] - this.state.penaltyScore[0]
    this.setState({totalScore: newTotal });
  }


  renderRow(colour, checks, score) {
    return <ColourRow colour={colour} checks={checks} score={score}
      clickHandler={(value) => {this.handleClick(value, checks, score) } }/>;
  }

  renderScore(colour, score) {
    return <Score colour={colour} score={score} />; 
  }

  renderScoringRulesAndPenalty(penalties, score) {
    return <ScoringRules penalties={penalties} 
      clickHandler={(index) => {this.handlePenaltyClick(index, penalties, score )}}
    />;
  }

  render() {

    return (
      <div className="ScoreBoard">
        {this.renderRow("Red", this.state.reds, this.state.redScore )}
        {this.renderRow("Blue", this.state.blues, this.state.blueScore)}
        {this.renderRow("Green", this.state.greens, this.state.greenScore)}
        {this.renderRow("Yellow", this.state.yellows, this.state.yellowScore)}
        {this.renderRow("Purple", this.state.purples, this.state.purpleScore)}

        {this.renderScoringRulesAndPenalty(this.state.penalties, this.state.penaltyScore)}

        <div className="ScoreRow">
        {this.renderScore("Red", this.state.redScore)} <div className="Divider">+</div>
        {this.renderScore("Blue", this.state.blueScore)} <div className="Divider">+</div>
        {this.renderScore("Green", this.state.greenScore)} <div className="Divider">+</div>
        {this.renderScore("Yellow", this.state.yellowScore) }<div className="Divider">-</div>
        {this.renderScore("Purple", this.state.purpleScore) }<div className="Divider">-</div>
        {this.renderScore("Grey", this.state.penaltyScore) }<div className="Divider">=</div>
        {this.renderScore("Total", this.state.totalScore)} 
        </div>         
      </div>
    );
  }
}

export default ScoreBoard;
