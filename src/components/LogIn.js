import React from 'react';

const LogIn = ({loginUsername, handleChange, loginPassword, signIn}) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Username'
        name='loginUsername'
        value={loginUsername}
        onChange={handleChange}
      /> <br/>
      <input
        type='text'
        placeholder='Password'
        name='loginPassword'
        value={loginPassword}
        onChange={handleChange}
      /> <br/>
    <button onClick={signIn}>Login In!</button>

    </div>
  )
}

export default LogIn;
