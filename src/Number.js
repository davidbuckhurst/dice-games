import React from 'react';

class Number extends React.Component {
  render() {
    return (
      <div className={["Number", this.props.colour, this.props.checked ? "Checked" : "Unchecked" ].join(' ')} 
        onClick={() => this.props.onClick()}>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Number;
