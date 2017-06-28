import React from 'react'

class PoemWriter extends React.Component {
  constructor() {
    super()

    this.state = {
      message: ''
    }
  }

  changer = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  validator () {
    if (this.state.message && this.state.message.split('\n').length === 3) {
      let newArr = this.state.message.split('\n'),
        arr1 = newArr[0].trim().split(' '),
        arr2 = newArr[1].trim().split(' '),
        arr3 = newArr[2].trim().split(' ')
      if (arr1.length === 5 && arr2.length === 3 && arr3.length === 5) {
        return true
      }
    } else {
      return false
    }
  }

  render() {
    var error = (<div
      id="poem-validation-error"
      style={{color: 'red'}}
    >
      This poem is not written in the right structure!
    </div>)
    if (this.validator()) {
      error = null
    }
    return (
      <div>
        <textarea value={this.state.message} onChange={this.changer}
          rows="3"
          cols="60"
        />
        {error}
      </div>
    );
  }
}

export default PoemWriter
