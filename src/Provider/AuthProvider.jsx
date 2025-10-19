import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase.init';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
  const [user,setUser]=useState([]);
  console.log(user);

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
  }
  return <AuthContext value={authData}>{children}</AuthContext>
    ;
};

export default AuthProvider;