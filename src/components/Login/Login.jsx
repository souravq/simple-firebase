import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

export default function Login() {

const [userData, setUserData] = useState(null);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

function handleLoginButton(){
    console.log("Button Clicked");
    signInWithPopup(auth,googleProvider)
    .then((result)=>{
        const user = result.user;
        setUserData(user);
        console.log(user);

    }).catch((error)=>{
        console.log(error);
    })
}

function handleLogoutButton(){
    signOut(auth)
    .then(()=>{
        console.log("sign out");
        setUserData(null);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function handleGithubLoginButton(){
    signInWithPopup(auth,githubProvider)
    .then((result)=>{
        const data = result.user;
        console.log(data); 
        setUserData(data);
    })
    .catch(error=>{
        console.log(error);
    })
}
    
  return (
    <div>
        {
            userData?<button onClick={handleLogoutButton}>Google Sign Out</button>:
            <>
                <button onClick={handleLoginButton}>Google Sign In</button>&nbsp;&nbsp;
                <button onClick={handleGithubLoginButton}>Github Sign In</button>
            </>
            
        }
        {
           userData? <>
                <h4>Name : {userData?.displayName}</h4>
                <h4>Email Id : {userData?.email}</h4>
                <img src={userData?.photoURL} alt="Image"/>
            </>:<></>
        }
           
            
    </div>
  )
}
