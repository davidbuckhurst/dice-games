import React from 'react';

function translateState(state) {
  if (state == null ) {
    return "Unchecked"
  }
  if (state == false ) {
    return "Disabled"
  }
  if (state == true ) {
    return "Checked"
  }
}

class Number extends React.Component {
  render() {
    return (
      <div className={["Number", this.props.colour, translateState(this.props.checked) ].join(' ')} 
        onClick={() => this.props.onClick()}>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Number;
