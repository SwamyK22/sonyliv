import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function OTP() {
  const [otp, setOtp] = useState('');

  return (
    <div className='signContainer'>
       <div style={{display:'flex', alignItems:'center', width:'20%'}}>
        <p className='backToSing'>&lt; </p>
        <p className='signInTitle'>Veirfy by OTP</p></div>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                inputStyle={{backgroundColor:'inherit', border:'none', borderBottom:'1px solid #ffff', fontSize:28, outline:'none', color:'#ffff'}}
                renderSeparator={<span>&nbsp;&nbsp;</span>}
                renderInput={(props) => <input {...props} />}
            />
            <a style={{color:'orange'}}>Change Number</a>
            <button className='singInBtn'>Continue</button>
    </div>
  );
}