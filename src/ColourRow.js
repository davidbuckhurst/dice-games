import React from 'react';
import Number from './Number.js'

class ColourRow extends React.Component {
  renderNumber(colour, value, status) {
    return <Number colour={colour} value={value} />;
  }
  render() {

    return (
      <div className="ColourRow">
        {this.renderNumber(this.props.colour,2)}
        {this.renderNumber(this.props.colour,3)}
        {this.renderNumber(this.props.colour,4)}
        {this.renderNumber(this.props.colour,5)}
        {this.renderNumber(this.props.colour,6)}
        {this.renderNumber(this.props.colour,7)}
        {this.renderNumber(this.props.colour,8)}
        {this.renderNumber(this.props.colour,9)}
        {this.renderNumber(this.props.colour,10)}
        {this.renderNumber(this.props.colour,11)}
        {this.renderNumber(this.props.colour,12)}
      </div>
      //<div className="Lock">
      //  {this.renderLock(this.props.locked)}
      //</div>
    );
  }
}

export default ColourRow;
