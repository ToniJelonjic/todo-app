import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Auth.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  //simulacija ispravnosti podataka
  const validateCredentials = (email, password) => {
    const validEmail = 'toni@hotmail.com';
    const validPassword = 'password';
    return email === validEmail && password === validPassword;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    //simulacija provjere ispravnosti podataka
    if (validateCredentials(email, password)) {
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className='auth'>
        <h1 className='auth-title'>Login</h1>
        <form onSubmit={handleLogin}>
        <input type="email" placeholder='Email' value={email} onChange={handleEmail} required />
        <input type="password" placeholder='Password' value={password} onChange={handlePassword} required />
            <button>Login</button>
            {error && <p className="error">{error}</p>}
            <span>You don't have an account? <Link to="/register">Register here</Link></span>
        </form>
    </div>
  )
}

export default Login