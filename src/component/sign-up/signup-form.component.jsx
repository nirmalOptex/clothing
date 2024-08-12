import { useState } from "react";
import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../input/form-input.component";
import '../input/form-input.style.scss'
import '../sign-up/signup-form.styles.scss'
import Button  from "../button/button.component";
const defaultformfileds={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}


const Signupform = () => {
    const [formfields,setFormFields]=useState(defaultformfileds);
    const{ displayName , email , password , confirmPassword }=formfields;


    const resetFormFields=()=>{
        setFormFields(defaultformfileds);
    }



    const handlesubmit =async(event)=>{
        event.preventDefault() ;

        if(password!==confirmPassword){
                alert("Password does not match ");
                return;
        };
            try{
                const {user}=await createAuthUserWithEmailAndPassword(email,password);
                await createUserDocumentFromAuth(user,{displayName});
                resetFormFields();    
            }catch(error){
                if(error.code='auth/email-already-in-use'){
                    alert("cannot authenticate email already use")
                }else{
                console.log("error",error);

                }
            }
    };

    const handleChange=(event) =>{
        const {name,value} =event.target; 
    
    setFormFields({...formfields,[name]:value})
    };
        console.log(formfields);
        return(
        <div className="sign-up-container">
            <h2>Don't have an account?  </h2>
            <span>Sign up with your email and  password</span>
            <form onSubmit={handlesubmit}>
            
            <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

            <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

            <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

            <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}  />

                <Button buttonType='default' type='submit'>SignUp</Button>
            </form> 
        </div>
    );
}

export default Signupform;