import React from 'react'

function SignIn() {
  return (
    <div className='signContainer'>
        <p className='signInTitle'>Sign in to continue</p>
        <div>
            <p className='inpLable'>Enter your Mobile Number</p>
            <div className='inpuContainer'>
            <span>+91-</span>
            <input className='numberInp' type='text'/>
            </div>
        </div>
            <button className='singInBtn'>Continue</button>
            <p className='singInConfirm'>By proceeding you confirm that you are of 18 years or above and accept the
            <a href="/" className='termsPolicy'>Terms of Use & Privacy Policy</a></p>
    </div>
  )
}

export default SignIn