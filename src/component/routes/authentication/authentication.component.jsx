

  import Signupform from '../../sign-up/signup-form.component';
  import Signinform from '../../sign-in/sign-in-form.component';
import './authentication.styles.scss'

const Authentication = () =>{
  
return(
        <div className='authentication-container'>
            {/* <h1>sign in Page</h1> */}
            <Signinform/>
        {/* <button onClick={logGoogleUser}>Sign In With Google Popup</button> */}
        <Signupform/>
</div>    
    );
};
export default Authentication; 
