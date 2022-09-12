import React from 'react';
import { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { firebaseappContext } from '../../store/firebaseContext';
import {useHistory} from 'react-router-dom';

export default function Login() {
  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')
  const{firebase} = useContext(firebaseappContext)
  const history=useHistory()


  const handleLogin =(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {history.push('/')

    
      // Signed in
      
      // ...
    })
    .catch((error) => {
      alert(error.message)
    
    });
  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
            alt=''
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href=''>Signup</a>
      </div>
    </div>
  );
  }
