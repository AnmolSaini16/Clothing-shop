import React, { Component } from 'react'
import { auth, signInWithGoogele } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'

 class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    }

  }

  handleSubmit = event => {
      event.preventDefault()

      const { email, password } = this.state;

      try {
        auth.signInWithEmailAndPassword(email, password)
        this.setState({ email: '', password: '' })
      } catch (error) {
        console.log(error);
      }

      this.setState({email: '', password: ''})
  }

  handleChange = event => {
      const { value, name} = event.target;

      this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
            <FormInput 
              type="email" 
              name='email' 
              value={this.state.email} 
              handleChange={this.handleChange} 
              required 
              label="email" 
            />
            <FormInput 
              type="password" 
              name='password' 
              value={this.state.password} 
              handleChange={this.handleChange} 
              required 
              label="password" 
            />
           <div className='buttons'>
            <CustomButton type="submit" >Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogele} isGoogleSignIn>Sign in with Google</CustomButton>
           </div>
        </form>
      </div>
    )
  }


}

export default SignIn;
