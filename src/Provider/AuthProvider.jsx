import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase.init';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
  const [user,setUser]=useState([]);
  const [error,setError]=useState('');
  

  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
    .then(res=>{
      console.log(res.user);
      setUser(user)
    })
    .catch(error=>{
      console.log(error.message)
    })
  };

  const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
    .then(res=>{
      console.log(res.user);
      // setUser(user)
    })
    .catch(error=>{
      console.log(error.message)
      setError(error.message);
    })
    
  }
  const logout=()=>{
    return signOut(auth)
    .then(res=>{
      console.log(res.user);
      // setUser(user)
      alert("you logged out")
      
    })
    .catch(error=>{
      console.log(error.message)
    })
  }

   useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    });
    return ()=>{
      unSubscribe();
    }
   },[])
  const authData={
    user,
    setUser,
    createUser,
    logout,
    login,
  }
  return <AuthContext value={authData}>{children}</AuthContext>
    ;
};

export default AuthProvider;