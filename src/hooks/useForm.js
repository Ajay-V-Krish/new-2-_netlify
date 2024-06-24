import React from 'react'
import { useState } from 'react'
import validate from '../utils/validate'

const useForm = (validate) => {
   const [values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:'',
   })

   const [errors, setErrors] = useState({})


   const handleChange=(e)=>{
    
    const{name,value}=e.target;

    setValues((currnt)=>{
        return{
            ...currnt,
            [name]:value,};
})

    }

    const handleSubmit=(event)=>{
        event.preventDefault()

        setErrors(validate(values))
    }
    return{values,handleChange,handleSubmit,errors}
}


export default useForm