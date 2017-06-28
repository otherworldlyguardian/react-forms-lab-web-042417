import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super()

    this.state = {
      message: ''
    }
  }

  lengthCheck = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={this.lengthCheck} type="text" />
        <strong>Chars. left: {this.props.maxChars - this.state.message.length}</strong>
      </div>
    )
  }
}

export default TwitterMessage
