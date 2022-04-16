import { useState, useContext } from "react"
import { UserContext } from "../../context/user"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase"
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

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const {setCurrentUser} = useContext(UserContext)

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
      const { user } = await createAuthUserWithEmailAndPassword(email, password)

      setCurrentUser(user)

      await createUserDocumentFromAuth(user, {displayName})
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
        <Button buttonType="">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm