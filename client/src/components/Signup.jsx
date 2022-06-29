import React from 'react'

const Signup = () => {
  return (
    <form action="http://localhost:5000/signup" method="post">
        <h3>First Name</h3>
          <input type="text" name="firstName" />
        <h3>Email</h3>
          <input type="email" name='email' />
        <h3>Password</h3>
          <input type="password" name='password' />
          <br></br>
          <br></br>
          <input type="submit" value="Login" />
      </form>
  )
}

export default Signup;