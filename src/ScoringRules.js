import React from 'react';

class Rule extends React.Component {
  render() {
    return (
      <div className="Rule">
        <div className="RuleCount">{this.props.count}x</div>
        <div className="RuleScore"><strong>{this.props.score}</strong></div>
      </div>
    )
  };
}

class Penalty extends React.Component {
  render() {
    return (
      <div className={["Penalty", this.props.checked ? "Checked" : "Unchecked" ].join(' ')}
        onClick={() => this.props.clickHandler(this.props.index, this.props.checks, this.props.score)} />
    )
  };
}

class ScoringRules extends React.Component {

  renderRule(count, score) {
    return <Rule count={count} score={score} />;
  }

  renderPenalty(checked, index, clickHandler) {
    return <Penalty checked={checked} index={index} clickHandler={clickHandler} />;
  }

  render() {
    return (
      <div className="ScoringRules">
        {this.renderRule(1,1)}
        {this.renderRule(2,3)}
        {this.renderRule(3,6)}
        {this.renderRule(4,10)}
        {this.renderRule(5,15)}
        {this.renderRule(6,21)}
        {this.renderRule(7,28)}
        {this.renderRule(8,36)}
        {this.renderRule(9,45)}
        {this.renderRule(10,55)}
        {this.renderRule(11,66)}
        {this.renderRule(12,78)}
        <div className="Penalties">
          <div className="Text">PENALTIES</div>
          <div>
          {this.renderPenalty(this.props.penalties[0], 0, this.props.clickHandler)}
          {this.renderPenalty(this.props.penalties[1], 1, this.props.clickHandler)}
          {this.renderPenalty(this.props.penalties[2], 2, this.props.clickHandler)}
          {this.renderPenalty(this.props.penalties[3], 3, this.props.clickHandler)}
          </div>
        </div>
      </div>
    );
  }
}

export default ScoringRules;
