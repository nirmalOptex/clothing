import { initializeApp } from 'firebase/app';
import { 
    getAuth ,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    
} from 'firebase/auth'

import {
    getFireStore,
    doc,
    getDoc,
    setDoc,
    getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChMWGRQPHC8dOoW6p3GHTbfGOMyyb7IyM",
    authDomain: "crwn-clothing-db-90ab9.firebaseapp.com",
    projectId: "crwn-clothing-db-90ab9",
    storageBucket: "crwn-clothing-db-90ab9.appspot.com",
    messagingSenderId: "674814827780",
    appId: "1:674814827780:web:621308e9ff520d47a70451"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
    prompt:"select_account"
  });

    export const auth=getAuth();
    export const signInWithGooglePopup= ()=>signInWithPopup(auth,provider); 
    export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider);


    export const db=getFirestore();
    export const createUserDocumentFromAuth =async (userAuth,additionalInformation ={}) =>{
        if(!userAuth)return;


        const userDocRef=doc(db, 'users' , userAuth.uid);    
    const userSnpShot =await getDoc(userDocRef);
        
if(!userSnpShot.exists()){
    const{displayName , email} =userAuth;
    const createdAt =new Date();
    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
        });
    }catch(error){
        console.log("error creating the user ",error.message);
    }
}
return userDocRef;

    
};
export const createAuthUserWithEmailAndPassword =async (email,password)=>{
    if(!email || !password) return;

    return  await createUserWithEmailAndPassword(auth,email ,password)


}
export const SignInAuthUserWithEmailAndPassword =async (email,password)=>{
    if(!email || !password) return;

    return  await signInWithEmailAndPassword(auth,email ,password);


}

//check if the data exits 


//if the user data does not exits