import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const fireBaseInstillationApp=()=>{
    initializeApp(firebaseConfig);
};
export default fireBaseInstillationApp;