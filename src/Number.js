import React from 'react';

class Number extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {

    return (
      <div className={["Number", this.props.colour, this.state.checked ? "Checked" : "Unchecked" ].join(' ')} 
        onClick={() => this.setState({checked: !this.state.checked})}>
      
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Number;
