import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputFocus, setInputFocus] = useState({ email: false, password: false });
  const [buttonHover, setButtonHover] = useState(false);
  const [error, setError] = useState('');
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://retoolapi.dev/5M2qFh/data', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      const user = data.find((user) => user.mail === email && user.password === password);

      if (user) {
        
        nav('/');
      } else {
        // Handle errors
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.header}>Welcome Back!</h2>
        <p style={styles.subHeader}>Login to your account</p>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">Email:</label>
            <input
              style={{ ...styles.input, ...(inputFocus.email && styles.inputFocus) }}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setInputFocus({ ...inputFocus, email: true })}
              onBlur={() => setInputFocus({ ...inputFocus, email: false })}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">Password:</label>
            <input
              style={{ ...styles.input, ...(inputFocus.password && styles.inputFocus) }}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setInputFocus({ ...inputFocus, password: true })}
              onBlur={() => setInputFocus({ ...inputFocus, password: false })}
            />
          </div>
          <button
            style={{ ...styles.button, ...(buttonHover && styles.buttonHover) }}
            type="submit"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Login
          </button>
          <p style={styles.footer}>
            Don't have an account? <Link to="/register" style={styles.link}>Sign up</Link>
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
  loginBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    width: '350px',
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

export default LoginPage;