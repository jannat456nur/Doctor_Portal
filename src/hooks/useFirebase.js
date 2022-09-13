import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Home/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut ,onAuthStateChanged} from "firebase/auth";


initializeFirebase();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading,setIsLoading]=useState(true)

  const [authError,setAuthError] =useState('');

    
    const registerUser = (email, password) => {
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {

                setAuthError('');
  })
  .catch((error) => {
    const errorCode = error.code;
    setAuthError(error.message);
    // ..
  })
  .finally(()=>setIsLoading(false));
        
    }
    useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {

          const uid = user.uid;
          setUser(user)
          // ...
        } else {
          setUser({})
        }
        setIsLoading(false)
      });
      return()=>unsubscribe
    },[])

    const loginUser=(email,password)=>{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            
        }).catch((error) => {
            
        }) .finally(()=>setIsLoading(false))
    }
   


    return {
        user,
        isLoading,
        authError,
        registerUser,
        logOut,
        loginUser
 }
}




export default useFirebase;