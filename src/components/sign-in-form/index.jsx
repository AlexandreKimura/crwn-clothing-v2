import { useState, useContext } from "react"
import { UserContext } from "../../context/user"
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase"
import Button from "../button"
import FormInput from "../form-input"

import './styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const { setCurrentUser } = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      setCurrentUser(user)
      resetFormFields()
    }catch(err) {
      switch(err.code) {
        case 'auth/wrong-password':
          alert('Incorrect email and password')
          break
        case 'auth/user-not-found':
          alert('User does not exist')
          break
        default:
          console.log(err)
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
        <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email}/>
        <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password}/>
        <div className="buttons-container">
          <Button type='submit'>Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm