import React, { useEffect } from 'react'
import Input from '../../Components/Input/Input';
import ReCAPTCHA  from "react-google-recaptcha"
import { useDispatch, useSelector } from 'react-redux';
import laodStateAction from '../../Redux/Action/thunkMiddleware/laodStateAction';
import { Form, Formik } from 'formik';
import axiosInstanceDb from '../../util/axiosDb/axiosInstanceDb';
import { Navigate, useNavigate } from 'react-router-dom';



function AdminSignIn() {
    const admin = useSelector((state) => state.admin)
    const dispatch = useDispatch();
    const nav = useNavigate();
    
    //Validation
    const validate = (values) => {
        const errors = {};
        if (!values.userName) {
            errors.userName = '...Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userName)
          ) {
            errors.userName = 'Invalid User Name';
          }
        if(!values.password){
            errors.password = "...Required";
        }
          return errors;
    }

    //Admin Signin
    const signin = (values) => {
        console.log(values, admin);
        if(values.userName === admin.userName && values.password === admin.password) {
            nav('/dashboard', {replace: true})
        }
        else {
            console.log('Error');
        }
    }
   

    //Load Admin 
    const loadAdmin = async() => {
        const res = await axiosInstanceDb.get('admin');
        const ad = await res.data;
        dispatch({type: 'ADD_ADMIN', payload: ad})
    }
    useEffect(() => {
        dispatch(laodStateAction());
        loadAdmin()
    },[]);
    
  return (
    <div className='adminSignInContainer'>
        <h1>SONY LIV ADMIN</h1>
        <div className='adminSubContainer'>
            <h3>Sign In to Start Your Session</h3>
            <Formik
            initialValues={{userName:'', password:''}}
            onSubmit={(values) => signin(values)}
            validate={(values) => validate(values)}
            >{({values, handleChange, handleSubmit, errors}) => (
                <Form>
                <Input value={values.userName} 
                name="userName"
                onChange={handleChange} type='text' placeholder="User Name" />
                {errors.userName && <p className='err'>{errors.userName}</p>}
                <Input value={values.password} 
                name="password"
                onChange={handleChange} type='password' placeholder="Password" />
                {errors.password && <p className='err'>{errors.password}</p>}
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    
                />
                <button type='submit' onSubmit={handleSubmit}>SignIn</button>
                </Form>
            )}</Formik>
            
        </div>
    </div>
  )
}

export default AdminSignIn;