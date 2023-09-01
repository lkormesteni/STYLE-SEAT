import React, { useState } from 'react';

function Login({ changeToSignUp , changeToHome }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/client'); // Replace with your API endpoint
      const data = await response.json();

      // Simulate a simple check for correct email and password
      const foundUser = data.find(user => user.email === email && user.password === password);

      if (foundUser) {
        changeToHome()

      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
        <button type="button" onClick={changeToSignUp}>Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
//