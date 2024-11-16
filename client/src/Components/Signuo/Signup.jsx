import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputFocus, setInputFocus] = useState('');
  const [buttonHover, setButtonHover] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://retoolapi.dev/5M2qFh/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      if (response.ok) {
        navigate('/countdowntimer');
      } else {
        // Handle errors
        const data = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.registrationBox}>
        <h2 style={styles.header}>Create an Account</h2>
        <p style={styles.subHeader}>Join our community and start shopping!</p>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleRegister}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="firstName">First Name:</label>
            <input
              style={{ ...styles.input, ...(inputFocus === 'firstName' && styles.inputFocus) }}
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onFocus={() => setInputFocus('firstName')}
              onBlur={() => setInputFocus('')}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="lastName">Last Name:</label>
            <input
              style={{ ...styles.input, ...(inputFocus === 'lastName' && styles.inputFocus) }}
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onFocus={() => setInputFocus('lastName')}
              onBlur={() => setInputFocus('')}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">Email:</label>
            <input
              style={{ ...styles.input, ...(inputFocus === 'email' && styles.inputFocus) }}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setInputFocus('email')}
              onBlur={() => setInputFocus('')}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">Password:</label>
            <input
              style={{ ...styles.input, ...(inputFocus === 'password' && styles.inputFocus) }}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setInputFocus('password')}
              onBlur={() => setInputFocus('')}
            />
          </div>
          <button
            style={{ ...styles.button, ...(buttonHover && styles.buttonHover) }}
            type="submit"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Sign Up
          </button>
          <p style={styles.footer}>
            Already have an account? <Link to="/" style={styles.link}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  },
  registrationBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    width: '400px',
  },
  header: {
    marginBottom: '10px',
    color: '#333333',
    fontSize: '24px',
  },
  subHeader: {
    marginBottom: '30px',
    color: '#666666',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '20px',
    width: '100%',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555555',
  },
  input: {
    width: '100%',
    padding: '12px',
    boxSizing: 'border-box',
    border: '1px solid #cccccc',
    borderRadius: '6px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  inputFocus: {
    borderColor: '#0066cc',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#0066cc',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.2s',
  },
  buttonHover: {
    backgroundColor: '#004d99',
  },
  footer: {
    marginTop: '20px',
    color: '#666666',
    fontSize: '14px',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
  },
};

export default Signup;