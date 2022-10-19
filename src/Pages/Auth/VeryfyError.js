
const VerifyError = (key, setError, dataForm) => {
    switch (key) {
        case 'email':
            if(!dataForm.email) 
               return setError(pre => ({...pre, [key]: "email is required"}))
            if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(dataForm.email))
                return setError( 
                    pre => ({
                    ...pre,
                    email: "incorrect email"
                }))
            return
        // eslint-disable-next-line no-fallthrough
        case 'name': 
            if(!dataForm.name) 
                 setError(pre => ({...pre, [key]: "name is required"}))    
            return
        case 'password':
            if(!dataForm.password) 
                 setError(pre => ({...pre, [key]: "password is required"}))
            return
        case 'password_confirmation':
             if(dataForm.password_confirmation !== dataForm.password) 
                 setError(pre => ({...pre, [key]: "password and confirm password not match "})) 
            return
        case 'code':
            if(!dataForm.code) 
                 setError(pre => ({...pre, [key]: "code is required"}))      
    
            return
        default:
            break;
    }
}

export default VerifyError