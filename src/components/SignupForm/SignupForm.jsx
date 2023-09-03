import React, { Component } from 'react';
import useLocalStorage from 'components/Hooks/useLocalStorage';

// serialize = JSON.stringify,
// deserialize = JSON.parse

function SignupFormHooks() {
  // const [email, setEmail] = useState(
  //   JSON.parse(window.localStorage.getItem('email')) ?? ''
  // );
  // const [password, setPassword] = useState(
  //   JSON.parse(window.localStorage.getItem('password')) ?? ''
  // );

  // useEffect(() => {
  //   if (email) {
  //     window.localStorage.setItem('email', JSON.stringify(email));
  //   }
  // }, [email]);

  // useEffect(() => {
  //   if (password) {
  //     window.localStorage.setItem('password', JSON.stringify(password));
  //   }
  // }, [password]);

  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        console.log(`E-mail: ${value}`);
        setEmail(value);
        break;
      case 'password':
        console.log(`Password: ${value}`);
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <form autoComplete="off">
      <label>
        <span>Email</span>
        <input type="text" name="email" onChange={handleChange} value={email} />
      </label>
      <br />
      <label>
        <span>Password</span>
        <input
          type="text"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>
      <br />
      <button type="submit">Sign in</button>
    </form>
  );
}

class SignupForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form autoComplete="off">
        <label>
          <span>Email</span>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>
        <br />
        <label>
          <span>Password</span>
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </label>
        <br />
        <button type="submit">Sign in</button>
      </form>
    );
  }
}

export { SignupFormHooks, SignupForm };
