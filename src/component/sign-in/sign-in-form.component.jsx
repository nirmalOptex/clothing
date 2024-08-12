import { useState } from "react";
import { signInWithGooglePopup ,createUserDocumentFromAuth,SignInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../input/form-input.component";
import '../input/form-input.style.scss'
import '../sign-in/sign-in-form.styles.scss'
import Button  from "../button/button.component";
const defaultformfileds={
    
    email:'',
    password:'',
    
}


const Signinform = () => {
    const [formfields,setFormFields]=useState(defaultformfileds);
    const{  email , password  }=formfields;


    const resetFormFields=()=>{
        setFormFields(defaultformfileds);
    }

    const signInWithGoogle = async ()=>{
        const {user}=await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handlesubmit =async(event)=>{
        event.preventDefault() ;

        
            try{
                const response = await SignInAuthUserWithEmailAndPassword(email,password);
                console.log(response);
                resetFormFields();
            }catch(error){
                switch(error.code){
                    case 'auth/wrong-password':
                    alert('incorrect password')
                    break;
                    case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                    case 'auth/invalid-credential':
                    alert('You entered the wrong password');
                    break;
                    default:
                        console.log(error);
                }

                // if(error.code==='auth/wrong-password'){
                //     alert("incorrect password for email");
                // }else if(auth/user-not-found)
                //     console.log(error);
                
            }
        }; 

    const handleChange=(event) =>{
        const {name,value} =event.target; 
    
    setFormFields({...formfields,[name]:value})
    };
        console.log(formfields);
        return(
        <div className="sign-up-container">
            <h2>Already have an account  </h2>
            <span>Sign In with your email and  password</span>
            <form onSubmit={handlesubmit}>
            

            <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

            <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <div className="buttons-container">
                <Button  type='submit'> Sign In </Button>   
                <Button  type='button' buttonType='google' onClick={signInWithGoogle}> Google Sign In </Button>
                </div>
            </form> 
        </div>
    );
};

export default Signinform;