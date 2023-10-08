'use client'
import app from '@/Firebase/Firebase.congfig';
import React from 'react';
import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext(null);
const auth = getAuth(app);
import Cookies from 'js-cookie'
import {
     signInWithEmailAndPassword,
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     getAuth,
     onAuthStateChanged,
     signInWithPopup,
     signOut,
     updateProfile,
} from 'firebase/auth'
import { JwtToken } from '@/services/authorization';
const GlobalState = ({ children }) => {

     const [loading, setLoading] = useState(true)
     const [user, setUser] = useState(null);
     const [Error, setError] = useState(false)
     const [pageLoader, setPageLoader] = useState(false)
     const GoogleProvider = new GoogleAuthProvider();
     const createUser = async (email, password) => {
          const result = await createUserWithEmailAndPassword(auth, email, password)
          return result;
     }
     const updateUserProfile = async (name, photo) => {
          const result = await updateProfile(auth?.currentUser, {
               displayName: name,
               photoURL: photo,
          })

          return result
     }

     const GoogleLogin = async () => {
          const result = await signInWithPopup(auth, GoogleProvider)
          return result;
     }

     const Login = async (email, password) => {
          const result = await signInWithEmailAndPassword(auth, email, password);
          return result;
     }

     const handleToken = async (email) => {
          const EmailData = { email: email}
          const data = await JwtToken(EmailData);
          localStorage.setItem("token", data?.message);
     }

     useEffect(() => {
          const unsubcript = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser);
               setLoading(false);
               console.log(currentUser?.email);
               if (currentUser?.email) {
                    handleToken(currentUser?.email)
               
               } else {
                    localStorage.removeItem('token')
               }
          })
          return () => {
               unsubcript()
          }
     }, []);

     const LogOut = async () => {
          const result = await signOut(auth);
          return result;
     }

     const stateInfo = {
          updateUserProfile,
          createUser, GoogleLogin,
          user, loading, LogOut,
          pageLoader, setPageLoader,
          Error, setError,
          Login
     }
     return (
          <div>
               <GlobalContext.Provider value={stateInfo}> {children} </GlobalContext.Provider>
          </div>
     );
};

export default GlobalState;