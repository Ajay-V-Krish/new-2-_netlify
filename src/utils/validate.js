export default function validate(values){
    let errors={}

   
    if(!values.username.trim()){
        errors.username="Username required"
    }
    if(!values.email.trim()){
        errors.email="Email required"}

    else if (!/^\w+@[a-zA-z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email="Email is invalid"
    }
    
    if(!values.password.trim()){
        errors.password="Password is required"
    }
    
    else if(values.password.length < 6){
       errors.password="Password should be 6 characters or more"
    }

    if(!values.password2.trim()){
        errors.password2="Password is required"
    }

    else if(values.password !== values.password2)
        {
           errors.password2="Passwords donot match"
        }

        return errors
}