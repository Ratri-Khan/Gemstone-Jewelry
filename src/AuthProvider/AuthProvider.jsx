import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.Config';
// import app from '../firebase/firebase.config';


const auth = getAuth(app);
const provider = new GoogleAuthProvider(); 

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,provider);
    }


    const createUser = (email,password,displayName) =>{
       return createUserWithEmailAndPassword(auth,email,password,displayName);
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
       return signOut(auth);
    }
    const updateUserProfile = ( profile ) =>{
        return updateProfile(auth.currentUser, profile)
    };
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('auth state change' , currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        handleGoogleSignIn,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;