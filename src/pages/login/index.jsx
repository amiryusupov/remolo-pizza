import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginRequest } from '../../redux/actions/loginAction'

function LoginPage() {
const initialState = {
    email: "",
    password: ""
}
  const [formState, setFormState] = useState(initialState)
  const dispatch = useDispatch()
  const {loading} = useSelector((state) => state.auth)
  const onInputChange = ({target}) => {
    const {name, value} = target
    setFormState({...formState, [name]: value})
  }
  const onSubmit = () => {
    dispatch(loginRequest(formState))
  }
  return (
    <div className="login-page">
      <div className="login-form">
        <h2 className="login-form__title">Login</h2>
        <form className="login-form__form">
          <div className="login-form__group">
            <label htmlFor="email" className="login-form__label">Username</label>
            <input
              type="email"
              id="username"
              name='email'
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
              name='password'
              required
              onChange={onInputChange}
              className="login-form__input"
            />
          </div>
          <button type="submit" disabled={loading} onClick={onSubmit} className="login-form__button">{loading ? "Loading..." : "Login"}</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;