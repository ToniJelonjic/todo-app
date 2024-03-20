import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Auth.css'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  //simulacija nekih postojecih emailova
  const emailAlreadyExists = (email) => {
    const existingEmails = ['toni@gmail.com', 'marko@gmail.com'];
    return existingEmails.includes(email);
  };

  const handleRegister = (e) => {
    e.preventDefault()
    //provjera postoji li vec taj email
    if(emailAlreadyExists(email)) {
      setError("Email already exists!")
    } else {
      //api poziv
      console.log("Successfull!")
      console.log("Email: ", email)
      console.log("Password: ", password)
      navigate("/login")
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className='auth'>
        <h1 className='auth-title'>Register</h1>
        <form onSubmit={handleRegister}>
        <input type="email" placeholder='Email' value={email} onChange={handleEmail} required />
        <input type="password" placeholder='Password' value={password} onChange={handlePassword} required />
            <button type='submit'>Register</button>
            {error && <p className="error">{error}</p>}
            <span>Already have an account? <Link to="/login">Login</Link></span>
        </form>
    </div>
  )
}

export default Register