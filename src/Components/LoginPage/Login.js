import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import firebaseConfig from "./firebase.config";
import {UserContext}  from "../../App";
import { useHistory, useLocation } from "react-router";



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext (UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    

   const handleGoogleSignIn =() =>{
    var googlProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(googlProvider)
  .then((result) => {
    
    const {displayName, email} = result.user;
    const signedInUser ={name : displayName, email }
    setLoggedInUser(signedInUser);
    storeAuthToken();
    history.replace(from); 
   
  }).catch((error) => {
   
    var errorCode = error.code;
    var errorMessage = error.message;
  
  });
   }
   const storeAuthToken = () =>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
    sessionStorage.setItem('token',idToken);
    }).catch(function(error) {
    
    });
   }
    return (
        <div className="border-0   ">
            <h3>login</h3>
           <div className =" m-5 pb-5 ">
           <button className="btn btn-dark btn-lg"  onClick ={handleGoogleSignIn}>google sign in</button>
           </div>
        </div>
    );
};
export default Login;