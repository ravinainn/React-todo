import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { server } from '../main'
import { toast } from 'react-hot-toast'


const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {

      const { data } = await axios.post(`${server}/users/new`, {
        name, email, password,
      },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        }
      );
      toast.success(data.message)

    } catch (error) {
      toast.error("some error.");
      console.log(error);
    }
  }
  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
          <button type='submit'>Sign Up</button>
          <h4>Or</h4>
          <Link to="/login">Log In</Link>

        </form>
      </section>
    </div>
  )
}

export default Register
