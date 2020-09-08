import React, { useState } from 'react';

import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');

  async function postLogin({ email, password }) {
    const url = 'https://eatgo-login-api.ahastudio.com/session';

    const response = await axios.post(url, {
      email, password
    });

    setSuccess(response.status);
  }

  function handleChangeEmail(event) {
    const { target: { value } } = event; 
    setEmail(value);
  }

  function handleChangePassword(event) {
    const { target: { value } } = event;
    setPassword(value); 
  }

  function handleSubmit() { 
    postLogin({ email, password });
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <div>Login</div>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={handleChangeEmail} 
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handleChangePassword} 
      />
      <button 
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>
      { 
        success && (
          <div>Login Success</div>
        ) 
      }
    </>
  );
}