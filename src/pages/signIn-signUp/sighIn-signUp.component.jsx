import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import './sighIn-signUp.styles.scss'

const SignInandSignUp = () => (
    <div className="sighIn-signUp">
       <SignIn />
       <SignUp />
    </div>
)

export default SignInandSignUp;