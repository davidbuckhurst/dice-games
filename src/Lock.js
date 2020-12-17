import React from 'react';

class Lock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {

    return (
      <div className={["Lock", this.props.colour, this.props.checked ? "Checked" : "Unchecked" ].join(' ')}>
        <span>&#128274;</span>
      </div>
    );
  }
}

export default Lock;
