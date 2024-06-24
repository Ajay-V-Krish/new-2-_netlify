import React from 'react'
import useForm from '../hooks/useForm'
import validate from '../utils/validate'

const Formsignup = () => {
    const {handleChange,values,handleSubmit,errors}=useForm(validate)
    
    
  return (
   <div className='form-content-right'>
        <form className='form'>
            <h1>Get started with us today! Create your account</h1>
               <div>
                 <label className='form-label' htmlFor='user'>
                     Username
                 </label>
                 <input id='user'
                        type='text' 
                        name='username' 
                        className='form-input'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}/>
                {errors.username && <p>{errors.username}</p>}
               </div>
               <div>
                 <label className='form-label' htmlFor='email'>
                     E-mail
                 </label>
                 <input 
                        id='email'
                        type='email' 
                        name='email' 
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}/>
                        {errors.email && <p>{errors.email}</p>}
               </div>
               <div>
                 <label className='form-label' htmlFor='password'>
                     Password
                 </label>
                 <input id='password'
                        type='password' 
                        name='password' 
                        className='form-input'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}/>
                        {errors.password && <p>{errors.password}</p>}
               </div>
                <div>
                 <label className='form-label' htmlFor='pass'>
                    Confirm password
                 </label>
                 <input id='pass'
                        type='password' 
                        name='password2' 
                        className='form-input'
                        placeholder='Confirm password'
                        value={values.password2}
                        onChange={handleChange}/>
                        {errors.password2 && <p>{errors.password2}</p>}
               </div> 
               <button className='form-inout-button' type='submit' onClick={handleSubmit}>SignUp</button>
               <span className='form-input-login'>Already have a account?
                 <a href='#'>Login here</a>
               </span>
        </form>

        
    </div>
  )
}

export default Formsignup