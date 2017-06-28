import React from 'react'

class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  changer = (event) => {
    let n = event.target.name, v = event.target.value
    this.setState({
      [n]: v
    })
  }

  submitter = (event) => {
    event.preventDefault()
    let u = this.state.username, p = this.state.password
    if (u || p) {
      this.props.onSubmit({ u, p})
    }
  }

  render() {
    return (
      <form onSubmit={this.submitter}>
        <div>
          <label>
            Username
            <input value={this.state.username} name='username'
            onChange={this.changer} id="test-username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password}
            name='password'
            onChange={this.changer} id="test-password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm
