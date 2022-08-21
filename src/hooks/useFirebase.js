import { useState } from "react";
import initializeFirebase from "../pages/Home/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut } from "firebase/auth";


initializeFirebase();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
        
    }

    const logOut = () => {
        signOut(auth).then(() => {
            
        }).catch((error) => {
            
        })
    }


    return {
        user,
        registerUser,
        logOut
 }
}




export default useFirebase;