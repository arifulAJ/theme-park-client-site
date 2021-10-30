import { useEffect, useState } from "react"
import { GoogleAuthProvider,getAuth, signInWithPopup,onAuthStateChanged,signOut   } from "firebase/auth";
import fireBaseInstillationApp from "../Pages/Firebase/firebase.init";
import { useHistory, useLocation } from "react-router";
const googlProvider = new GoogleAuthProvider();
fireBaseInstillationApp()
const useFirebase=()=>{
    const [user,setUser]=useState([]);
    //  const history=useHistory();
    //  const location=useLocation();
    //  const url=location.state?.form ||'/home'
    const auth = getAuth();
    const gooleSingn=()=>{
        signInWithPopup(auth, googlProvider)
        .then((result) => {
          console.log(result.user)
          setUser(result.user)
        //   history.push(url);
          })
         
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } 
          });},[])



const signOutat=()=>{
    signOut(auth)
    .then(() => {
      setUser({})
      })
}

    return{user,
        gooleSingn,signOutat

    }
}
export default useFirebase;