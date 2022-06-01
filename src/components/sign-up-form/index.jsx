import { useState } from "react"
import { useDispatch } from "react-redux"
import { signUpStart } from "../../store/user/userAction"
import Button from "../button"
import FormInput from "../form-input"

import './styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    if(password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields()
    }catch(err) {
      if(err.code === 'auth/email-already-in-user') {
        alert("Cannot create user, email already in use")
      }else {
        console.log('user creation encountered an error', err)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({...formFields, [name]: value})
  }

  return (
    <div className="sign-up-container">
      <h2>Don`t have an account?</h2>
      <span>Sign up with your e-mail and password</span>

      <form onSubmit={(e) => {handleSubmit(e)}}>
        <FormInput label="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName}/>
        <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email}/>
        <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password}/>
        <FormInput label="Confirm Password" required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
        <Button>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm