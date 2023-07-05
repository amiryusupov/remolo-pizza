import React, { useState } from 'react'

function LoginPage() {
const initialState = {
    email: "",
    password: ""
}
  const [formState, setFormState] = useState(initialState)
  const onInputChange = ({target}) => {
    const {value, name} = target
    setFormState({...formState, [name]: value})
  }
  return (
    <div className="login-page">
      <div className="login-form">
        <h2 className="login-form__title">Login</h2>
        <form className="login-form__form">
          <div className="login-form__group">
            <label htmlFor="username" className="login-form__label">Username</label>
            <input
              type="email"
              id="username"
              required
              onChange={onInputChange}
              className="login-form__input"
            />
          </div>
          <div className="login-form__group">
            <label htmlFor="password" className="login-form__label">Password</label>
            <input
              type="password"
              id="password"
              required
              onChange={onInputChange}
              className="login-form__input"
            />
          </div>
          <button type="submit" className="login-form__button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;