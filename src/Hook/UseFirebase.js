import { useEffect, useState } from "react"
import { GoogleAuthProvider,getAuth, signInWithPopup,onAuthStateChanged,signOut ,createUserWithEmailAndPassword,signInWithEmailAndPassword    } from "firebase/auth";
import fireBaseInstillationApp from "../Pages/Firebase/firebase.init";
// import { useHistory, useLocation } from "react-router";


const googlProvider = new GoogleAuthProvider();
fireBaseInstillationApp()
const useFirebase=()=>{
    const [user,setUser]=useState([]);
   
    
    const auth = getAuth();
//     const [email,setEmail]=useState([]);
//     const [password,setPassword]=useState([]);
//     const handelEmail=e=>{
//         setEmail(e.target.value)
//     }
//     const handelPassword=e=>{
//         setPassword(e.target.value);
      
//     }
//     const handelSignup=e=>{
//         e.preventDefault();
//         createUserWithEmailAndPassword(auth, email, password)
//         .then((result) => {
//             setUser(result.user)
            
          
//           })

//     }
//     const handelSignIn=e=>{
//         e.preventDefault();
//      signInWithEmailAndPassword(auth, email, password)
//   .then((result) => {
//    setUser(result.user);

 
//   })
    // }
    const googleSignIn=()=>{
      return  signInWithPopup(auth, googlProvider)
        
         
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } 
          });},[])



const signOutAt=()=>{
    signOut(auth)
    .then(() => {
      setUser({})
      })
}

    return{user,
        googleSignIn,
        signOutAt,
        // handelEmail,
        // handelSignup,
        // handelPassword,
        // handelSignIn,setUser
        setUser
    }
}
export default useFirebase;