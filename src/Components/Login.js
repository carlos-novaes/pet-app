import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  validateForm = () =>
    this.state.email.length > 0 && this.state.password.length > 0;

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.email}
            placeholder='E-mail'
            onChange={this.onEmailChange}
          />
          <label htmlFor='username'>E-mail</label>
          <input
            id='password'
            type='password'
            value={this.state.password}
            placeholder='••••••••••'
            onChange={this.onPasswordChange}
          />
          <label htmlFor='password'>Password</label>
          <button type='submit'>Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
