import React, { useState } from 'react';

function SignUp({ changeToLogin , changeToHome}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');


  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/client', { // Replace with your API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password, address }),
      });
      const data = await response.json();
      console.log(data)
      if (data.success) {
        alert('Sign up successful!');
        changeToHome()
      } 
      else {
        alert('Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
      <input
          type="fullName"
          placeholder="FullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <br />
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
        <input
          type="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <br />
        <button type="submit">Sign Up</button>
        <button type="button" onClick={changeToLogin}>Login</button>
      </form>
    </div>
  );
}

export default SignUp;
